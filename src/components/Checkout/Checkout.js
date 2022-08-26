import React from "react";
import { useContext, useState } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { collection, Timestamp, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import { addOrder, checkCart } from "../../services/firebase/firestore";

const Checkout = () => {
  const [status, setStatus] = useState(0);
  const [orderNumber, setorderNumber] = useState("");
  const [outStock, setOutStock] = useState([]);
  const { cart, total, clearCart } = useContext(CartContext);
  const [name, setname] = useState("");
  const [phone, setphone] = useState(0);
  const [mail, setmail] = useState("");

  const { removeItem } = useContext(CartContext);

  const Remove = (id) => {
    removeItem(id);
  };

  // Vista si hay stock
  if (status === 1) {
    return (
      <div>
        <p className="detail__title">Compra exitosa!</p>
        <div className="form__container">
          <p className="form__text">
            Se ha realizado la orden de compra exitosamente
          </p>
          <p className="form__text">Tu número de orden es {orderNumber}</p>
        </div>
      </div>
    );
  }
  // Vista si ocurrio un error
  if (status === 2) {
    return (
      <div>
        <p className="detail__title">Ocurrio un error</p>
        <div className="form__container">
          <p className="form__text">
            Los siguientes productos ya no estan disponibles
          </p>
          {outStock.map((item) => {
            return (
              <div key={item.id} className="content__item">
                <Link className="content__link" to={`/detail/${item.id}`}>
                  <img
                    alt={item.name}
                    className="content__img"
                    src={item.img}
                  />
                </Link>
                <Link to={`/detail/${item.id}`} className="content__name">
                  {item.name}
                </Link>
                <p className="content__price">
                  {item.price.toLocaleString("es-CL")}
                </p>
                <p className="content__stock">{item.quantity}</p>
                <Link
                  to={"/cart"}
                  className="content__btn"
                  onClick={() => Remove(item.id)}
                >
                  Quitar
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const sendData = async (e) => {
    try {
      e.preventDefault();
      // Validaciones a inputs
      if (!validate()) return;
      // Validaciones a items en carrito
      if (cart.length === 0) return;
      // Creación de objeto orden
      const order = {
        buyer: {
          name: name,
          phone: phone,
          email: mail,
        },
        items: cart,
        date: Timestamp.fromDate(new Date()),
        total,
      };

      // Chequea si los elementos estan disponibles
      const ids = cart.map((e) => e.id);
      const productRef = collection(db, "products");
      const prodOnFirestore = await checkCart(productRef, ids);

      const { docs } = prodOnFirestore;

      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const dbStock = dataDoc.stock;
        const itemToAdd = cart.find((prod) => prod.id === doc.id);
        const localQuantity = itemToAdd?.quantity;
        // Si es que hay stock
        if (dbStock >= localQuantity) {
          batch.update(doc.ref, { stock: dbStock - localQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      if (outOfStock.length === 0) {
        const orderRef = collection(db, "orders");
        const orderAdded = await addOrder(orderRef, order);
        batch.commit();

        clearCart();
        setStatus(1);
        setorderNumber(orderAdded.id);
      } else {
        setOutStock(outOfStock);
        setStatus(2);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Valida los inputs
  const validate = () => {
    if (name.length <= 0) {
      alert("El nombre no debe quedar en blanco");
      return false;
    }
    if (phone.length <= 0 || isNaN(parseInt(phone))) {
      alert("El número de teléfono no puede contener caracteres");
      return false;
    }
    if (mail.length <= 3 || !String(mail).includes("@")) {
      alert("Inserte un correo electrónico valido");
      return false;
    }
    return true;
  };
  // Vista predeterminada
  return (
    <div className="form__container">
      <p className="detail__title">Checkout</p>
      <form className="form">
        <input
          required
          onChange={(e) => {
            setname(e.target.value);
          }}
          className="form__input"
          type="text"
          placeholder="Nombre"
        />
        <input
          required
          onChange={(e) => {
            setphone(e.target.value);
          }}
          className="form__input"
          type="tel"
          placeholder="Telefono"
        />
        <input
          onChange={(e) => {
            setmail(e.target.value);
          }}
          required
          className="form__input"
          type="email"
          placeholder="Email"
        />
        <button className="form__btn" type="submit" onClick={sendData}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;

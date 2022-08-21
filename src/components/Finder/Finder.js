import React from "react";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import "./Finder.css";
import { db } from "../../services/firebase";

const Finder = () => {
  const [order, setOrder] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [orderData, setOrderData] = useState([]);

  const search = async (e) => {
    try {
      e.preventDefault();
      const orderRef = doc(db, "orders", order);
      const response = await getDoc(orderRef);
      if (response.data()) {
        setOrderData(response.data());
        setLoaded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loaded) {
    return (
      <div className="finder__container">
        <p className="detail__title">Rastreador de ordenes</p>
        <div className="finder__result">
          <p className="finder__title">Orden {order}</p>
          <p className="finder__text">Nombre: {orderData.buyer.name}</p>
          <p className="finder__text">Email: {orderData.buyer.email}</p>
          <p className="finder__text">Teléfono: {orderData.buyer.phone}</p>
          <p className="finder__text">
            Fecha compra:{" "}
            {new Date(orderData.date.seconds * 1000).toLocaleDateString(
              "es-CL"
            )}
          </p>
          <p className="finder__title">Detalle de la compra</p>
          {orderData.items.map((e) => (
            <div key={e.name} className="finder__item">
              <p className="finder__text">Nombre: {e.name}</p>
              <p className="finder__text">
                Precio: $ {e.price.toLocaleString("es-CL")}
              </p>
              <p className="finder__text">Cantidad: {e.quantity}</p>
            </div>
          ))}
          <p className="finder__text">
            Precio Total: $ {orderData.total.toLocaleString("es-CL")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="finder__container">
      <p className="detail__title">Rastreador de ordenes</p>
      <form className="finder__form">
        <input
          required
          className="finder__input"
          placeholder="N° de orden"
          onChange={(e) => {
            setOrder(e.target.value);
          }}
          type="text"
        />
        <button onClick={search} className="finder__btn">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Finder;

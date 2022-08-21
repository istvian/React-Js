import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, getTotal } = useContext(CartContext);
  const Remove = (id) => {
    removeItem(id);
  };
  if (cart.length === 0) {
    return (
      <div className="cart__content">
        <p className="content__text">No hay items en el carrito</p>
      </div>
    );
  }

  return (
    <div className="cart__content">
      <p className="cart__title">Carrito</p>
      {cart.map((item) => {
        return (
          <div key={item.id} className="content__item">
            <Link className="content__link" to={`/detail/${item.id}`}>
              <img alt={item.name} className="content__img" src={item.img} />
            </Link>
            <Link to={`/detail/${item.id}`} className="content__name">
              {item.name}
            </Link>
            <p className="content__price">
              {item.price.toLocaleString("es-CL")}
            </p>
            <p className="content__stock">{item.quantity}</p>
            <button className="content__btn" onClick={() => Remove(item.id)}>
              Quitar
            </button>
          </div>
        );
      })}
      <p className="content__total">{getTotal()}</p>
      <Link className="detail__btn" to="/checkout">
        Terminar mi compra
      </Link>
    </div>
  );
};

export default Cart;

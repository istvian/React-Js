import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, price, description, category, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);
  const onAdd = (quantity) => {
    setQuantity(quantity);
    addItem({ name, price, id, quantity, img });
  };
  return (
    <div className="itemListContainer">
      <p className="detail__title">Detalle</p>
      <div className="detail">
        <img alt={name} className="detail__img" src={img}></img>
        <span className="detail__name">{name}</span>
        <span className="detail__price">{price.toLocaleString('es-CL')}</span>
        <p className="detail__detail">{description}</p>
        <p className="detail__cat">{category}</p>
        <p className="detail__stock">{stock}</p>
        <div className="detail__counter">
          {quantity > 0 ? (
            <Link className="detail__btn" to="/cart">
              Ir al carrito
            </Link>
          ) : (
            <ItemCount
              className="detail__counter"
              initial={getProductQuantity(id)}
              onAdd={onAdd}
              stock={stock}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

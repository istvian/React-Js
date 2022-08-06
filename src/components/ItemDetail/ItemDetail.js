import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ detail }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantity) => {
    setQuantity(quantity);
  };
  return (
    <div className="itemListContainer">
      <p className="detail__title">Detalle</p>
      <div className="detail">
        <img alt={detail.name} className="detail__img" src={detail.img}></img>
        <span className="detail__name">{detail.name}</span>
        <span className="detail__price">{detail.price}</span>
        <p className="detail__detail">{detail.description}</p>
        <p className="detail__cat">{detail.category}</p>
        <p className="detail__stock">{detail.stock}</p>
        <div className="detail__counter">
          {quantity > 0 ? 
            <Link className="detail__btn" to="/cart">Ir al carrito</Link> :<ItemCount
            className="detail__counter"
            initial={0}
            onAdd={onAdd}
            stock={detail.stock}
          />
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

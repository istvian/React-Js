import React from "react";
import "./ItemDetail.css";
import { useState } from "react";

const ItemDetail = ({ detail }) => {
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
      </div>
    </div>
  );
};

export default ItemDetail;

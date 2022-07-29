import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
  const handleClick = (description) => {
    console.log(description);
  };

  return products.map((product) => (
    <li key={product.id} className="product">
      <img alt={product.name} className="product__img" src={product.img}></img>
      <div className="product__header">
        <span className="product__name">{product.name}</span>
        <span className="product__price">{product.price}</span>
      </div>
      <p className="product__cat">{product.category}</p>
      <Link className="product__btn" to={`/detail/${product.id}`}>Ver detalle</Link>
      <p className="product__stock">{product.stock}</p>
    </li>
  ));
};

export default Item;

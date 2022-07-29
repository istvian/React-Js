import React from "react";
import "./Item.css";

const Item = ({ products }) => {
  const handleClick = (description) => {
    console.log(description);
  };

  return products.map((product) => (
    <li key={product.key} className="productCard">
      <img alt={product.name} className="productImg" src={product.img}></img>
      <div className="productHeader">
        <span className="productName">{product.name}</span>
        <span className="productPrice">{product.price}</span>
      </div>
      <p className="productDetail">{product.description}</p>
      <p className="productCat">{product.category}</p>
      <button onClick={(e) => handleClick(e)}>Ver detalle del producto</button>
      <p className="productStock">{product.stock}</p>
    </li>
  ));
};

export default Item;

import React from "react";

const ItemDetail = ({ product }) => {
  const handleClick = (description) => {
    console.log(description);
  };
  return (
    <div className="itemListContainer">
      <li key={product.key} className="productCard">
        <img alt={product.name} className="productImg" src={product.img}></img>
        <div className="productHeader">
          <span className="productName">{product.name}</span>
          <span className="productPrice">{product.price}</span>
        </div>
        <p className="productDetail">{product.description}</p>
        <p className="productCat">{product.category}</p>
        <button onClick={(e) => handleClick(e)}>
          Ver detalle del producto
        </button>
        <p className="productStock">{product.stock}</p>
      </li>
    </div>
  );
};

export default ItemDetail;

import React from "react";
import "./Item.css";

const Item = ({ products }) => {
  return (
      products.map((product) => (
        // Solo para que no salga el error le asigne una key que es la key + el nombre del producto
        <li key={product.key+product.name} className="productCard"> 
          <img
            alt={product.name}
            className="productImg"
            src={product.img}
          ></img>
          <div className="productHeader">
            <span className="productName">{product.name}</span>
            <span className="productPrice">{product.price}</span>
          </div>
          <p className="productDetail">{product.description}</p>
          <p className="productCat">{product.category}</p>
          <button>Ver detalle del producto</button>
          <p className="productStock">{product.stock}</p>
        </li>
      ))
  );
};

export default Item;

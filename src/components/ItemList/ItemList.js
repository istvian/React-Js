import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({ products }) => {
  return (
   <ul className="itemList">
      <Item products={products} />
    </ul>
  );
};

export default ItemList;

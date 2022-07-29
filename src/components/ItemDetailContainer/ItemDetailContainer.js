import React from "react";
import { getProduct } from "../asyncMock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  useEffect(() => {
    getProduct()
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((res) => {
        console.log("Ocurrio un error");
      });
  }, []);

  if (!loading) {
    return (
      <div>
        <ItemDetail product={product} />
      </div>
    );
  }
  return <div></div>;
};

export default ItemDetailContainer;

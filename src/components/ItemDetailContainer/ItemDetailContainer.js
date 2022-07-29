import React from "react";
import { getProductByID } from "../asyncMock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const params = useParams();


  useEffect(() => {
    getProductByID(params.productId)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((res) => {
        console.log("Ocurrio un error");
      });
  }, [params]);

  if (!loading) {
    return (
      <div>
        <ItemDetail detail={product} />
      </div>
    );
  }
  return <div>
    <p className="detail__title">Cargando detalles...</p>
  </div>;
};

export default ItemDetailContainer;

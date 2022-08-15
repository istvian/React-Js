import React from "react";
// import { getProductByID } from "../asyncMock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    getDoc(doc(db, "products", productId))
      .then((response) => {
        const values = response.data();
        const product = {
          id: response.id,
          ...values,
        };
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (!loading) {
    return (
      <div>
        <ItemDetail {...product} />
      </div>
    );
  }
  return (
    <div>
      <p className="detail__title">Cargando detalles...</p>
    </div>
  );
};

export default ItemDetailContainer;

import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDocbyID } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";
import { fetcher } from "../../utils/fetcher";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { isLoading, data, error } = useAsync(fetcher(getDocbyID, productId), [
    productId,
  ]);

  if (!isLoading) {
    if (error) {
      return <h1>Ocurrio un error</h1>;
    }
    return (
      <div>
        <ItemDetail {...data} />
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

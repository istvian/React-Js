import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";
import { fetcher } from "../../utils/fetcher";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();

  const { isLoading, data, error } = useAsync(fetcher(getProducts,categoryId),
    [categoryId]
  );

  
  if (!isLoading) {
    if (error) {
      return <h1>Ocurrio un error</h1>;
    }
    return (
      <div className="itemListContainer">
        <p className="itemListContainer__title">{props.greeting}</p>
        <ItemList products={data} />
      </div>
    );
  }
  return (
    <div>
      <p className="itemListContainer__title">Cargando {categoryId}...</p>
    </div>
  );
};

export default ItemListContainer;

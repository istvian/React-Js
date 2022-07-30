import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    if (params.categoryId) {
      getProductsByCategory(params.categoryId)
        .then((response) => {
          setProducts(response);
        })
        .catch((reject) => {
          console.log(`Ocurrio un error ${reject}`);
        })
        .finally((response) => {
          setLoading(false);
        });
    } else {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((reject) => {
          console.log(`Ocurrio un error ${reject}`);
        })
        .finally((response) => {
          setLoading(false);
        });
    }
  }, [params.categoryId]);

  if (!loading) {
    return (
      <div className="itemListContainer">
        <p className="itemListContainer__title">{props.greeting}</p>
        <ItemList products={products} />
      </div>
    );
  }
  return (
    <div>
      <p className="itemListContainer__title">Cargando {params.categoryId}...</p>
    </div>
  );
};

export default ItemListContainer;

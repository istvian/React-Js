import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
// import { getProducts, getProductsByCategory } from "../asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = !categoryId
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", categoryId));
    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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
      <p className="itemListContainer__title">Cargando {categoryId}...</p>
    </div>
  );
};

export default ItemListContainer;

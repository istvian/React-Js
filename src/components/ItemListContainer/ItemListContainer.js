import "./ItemListContainer.css";
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../asyncMock";
import { useEffect, useState } from "react";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  if (!loading) {
    return (
      <div className="itemListContainer">
        <p className="title">{props.greeting}</p>
        <ItemList products={products} />
        {/* <ItemCount stock={10} initial={1} onAdd={AddItem} /> */}
      </div>
    );
  }
  // const AddItem = (quantity) => {
  //   alert(`Se han agregado ${quantity} Item al carrito`);
  // };
  return (
    <div>
      <p className="title">Cargando productos...</p>
    </div>
  );
};

export default ItemListContainer;

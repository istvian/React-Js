import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MercadoLibre from "./components/MercadoLibre/MercadoLibre";
import Sismos from "./components/Sismos/Sismos";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  const AddItem = (quantity) => {
    alert(`Se han agregado ${quantity} Item al carrito`);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route
              exact path="/"
              element={<ItemListContainer greeting="Todos los productos" />}
            ></Route>
            <Route
              exact path="/category/:categoryId" 
              element={
                <ItemListContainer greeting={`Filtrando por categoria`} />
              }
            ></Route>
            <Route
              exact path="/detail/:productId"
              element={<ItemDetailContainer />}
            ></Route>

          {/* <ItemCount initial={0} onAdd={AddItem} stock={10}/> */}
          {/* <MercadoLibre/> */}
          {/* <Sismos/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

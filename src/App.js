import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting="Todos los productos" />}
          ></Route>
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer greeting={`Filtrando por categoria`} />}
          ></Route>
          <Route
            exact
            path="/detail/:productId"
            element={<ItemDetailContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

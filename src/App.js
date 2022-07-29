import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import Sismos from './components/Sismos/Sismos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const AddItem = (quantity) => {
      alert(`Se han agregado ${quantity} Item al carrito`);
    };
  return (
    <div className="App">
      <NavBar/>
      <ItemCount initial={0} onAdd={AddItem} stock={10}/>
      <ItemListContainer greeting="Hola coders"/>
      <ItemDetailContainer/>
      {/* <MercadoLibre/> */}
      {/* <Sismos/> */}
    </div>
  );
}

export default App;

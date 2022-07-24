import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {

    const AddItem = (quantity) =>{
        alert(`Se han agregado ${quantity} Item al carrito`)
    }
    return (
        <div>
        <p className='title'>{props.greeting}</p>
        <ItemCount stock={10} initial={1} onAdd={AddItem} />
        </div>
    );
}

export default ItemListContainer;

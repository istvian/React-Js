import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart'>
            <img className='cart__img' src='carrito.png' alt='Carro de compras'/>
            <p className='cart__counter'>10+</p>
        </div>
    );
}

export default CartWidget;

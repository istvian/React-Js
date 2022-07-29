import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart'>
            <p className='cart__counter'>10+</p>
            <img className='cart__img' src='../cart.png' alt='Carro de compras'/>
        </div>
    );
}

export default CartWidget;

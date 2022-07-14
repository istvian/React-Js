import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cartContainer'>
            <img className='cartImg' src='carro.png' alt='Carro de compras'/>
            <p className='cartCount'>10+</p>
        </div>
    );
}

export default CartWidget;

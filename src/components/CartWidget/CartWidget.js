import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  const quantity = getQuantity();
  if(quantity==0)
  {
    return(
      <div className="cart-disabled">
      <div>
        <p className="cart__counter">{quantity}</p>
        <img className="cart__img" src="../cart.png" alt="Carro de compras" />
      </div>
    </div>
    )
  }
  return (
    <div className="cart">
      <Link to="/cart">
        <p className="cart__counter">{quantity}</p>
        <img className="cart__img" src="../cart.png" alt="Carro de compras" />
      </Link>
    </div>
  );
};

export default CartWidget;

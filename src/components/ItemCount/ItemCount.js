import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const add = (num) => {
    setCount(count + num);
  };
  
  return (
    <div className="container">
      <div>
        <p className="counterStock">Stock {stock}</p>
      </div>
      <div className="counterContainer">
        <button
          className="btnCounter no_selection"
          onClick={() => add(-1)}
          disabled={count === 0 ? true : null}
        >
          -
        </button>
        <p className="counterText">{count}</p>
        <button
          className="btnCounter no_selection"
          onClick={() => add(1)}
          disabled={count === stock ? true : null}
        >
          +
        </button>
      </div>
      <button
        className="btnCounter no_selection"
        disabled={stock === 0 || count === 0 ? true : null}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

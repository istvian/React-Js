import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategory } from "../../services/firebase/firestore";

const NavBar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory().then((categories) => {
      setCategory(categories);
    });
  }, []);

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/">
          <img
            className="nav__logo"
            alt="Logo de la empresa"
            src="/nantiki.png"
          />
        </Link>
      </div>
      <div className="nav__links">
        {category.map((cat) => (
          <Link
            key={cat}
            className="nav__btn"
            to={"/category/" + String(cat).toLowerCase()}
          >
            {cat}
          </Link>
        ))}
        <Link className="nav__btn" to="/find">
          Buscar Orden
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

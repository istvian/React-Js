import "./NavBar.css";
import logo from "./nantiki.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/">
          <img className="nav__logo" alt="Logo de la empresa" src={logo} />
        </Link>
      </div>
      <div className="nav__links">
        <Link className="nav__btn" to="/category/accesorios">
          Accesorios
        </Link>
        <Link className="nav__btn" to="/category/ordenadores">
          Ordenadores
        </Link>
        <Link className="nav__btn" to="/category/controles">
          Controles
        </Link>
        <Link className="nav__btn" to="/category/consolas">
          Consolas
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

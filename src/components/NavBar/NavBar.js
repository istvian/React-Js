import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";

const NavBar = () => {
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    getCat();
  }, []);
  const getCat = async () => {
    try {
      const catRef = collection(db, "categories");
      const response = await getDocs(catRef);
      const categories = [];
      response.docs.forEach((element) => {
        categories.push(element.data().description);
      });
      setCatData(categories);
    } catch (error) {
      console.log(error);
    }
  };

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
        {catData.map((cat) => (
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

import React from "react";
import { useEffect, useState } from "react";

const MercadoLibre = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState();
//   useEffect(() => {
//     fetch("https://api.mercadolibre.com/sites/MLC/search?q=auto").then(
//       (response) => {
//         response.json().then((res) => {
//           setProducts(res.results);
//           console.log(res.results);
//         });
//       }
//     );
//   }, []);
  const handleSearch =() =>{
    fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${input}`).then(
        (response) => {
          response.json().then((res) => {
            setProducts(res.results);
            console.log(res.results);
          });
        }
      );
  }

  return (
    <>
      <h1>MercadoLibre</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      {products.map((prod) => {
        return (
          <div key={prod.id}>
            <h3>{prod.title}</h3>
            <img src={prod.thumbnail} />
            <p>{prod.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default MercadoLibre;

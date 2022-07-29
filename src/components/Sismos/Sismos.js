import React from "react";
import { useState, useEffect } from "react";

const Sismos = () => {
  const [sismos, setSismos] = useState([]);

  useEffect(() => {
    fetch(`https://api.gael.cloud/general/public/sismos`).then((response) => {
      response.json().then((res) => {
        console.log(res);
        setSismos(res);
      });
    });
  }, []);

  return (
    <>
      <h1>Sismos</h1>
      {sismos.map((e) => {
        return (
          <div>
            <h3>{e.RefGeografica}</h3>
            <p>Fecha: {e.Fecha}</p>
            <p>Magnitud: {e.Magnitud}</p>
            <p>Profundidad: {e.Profundidad}</p>
          </div>
        );
      })}
    </>
  );
};

export default Sismos;

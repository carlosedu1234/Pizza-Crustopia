import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TarjetaProducto({ dato }) {
  const {id, nombre, precio,imagen,tipo } = dato;
  const [comprar,setComprar]=useState(0);
  const navegacion = useNavigate();

  const comprarPizza=()=>{
    setComprar(comprar+parseInt(precio))
  }
  const eliminarPizza=()=>{

    comprar>0?setComprar(comprar-parseInt(precio)):console.log(comprar)

  }
  return (
    <>
  
      <div className="tarjeta__pizza">
        <h2>{nombre}</h2>
        <div className="contenedor_imagen">
        <img
          src={imagen}
          alt="pizza"
          onClick={() =>{tipo==="pizza"? navegacion(`/ingredientesPizza/${id}`):console.log(tipo)}}
        />
        </div>
        <p>Precio : {precio}$</p>
        <div className="tarjeta_comprar">
          <p>Comprar</p> <button onClick={comprarPizza}>+</button> <button onClick={eliminarPizza}>-</button>
        </div>
        <div className="tarjeta_comprar">
          <p>Total</p> {comprar>0?<input type="text" readOnly value={comprar}/>:null}
        </div>
      </div>
    </>
  );
}

export default TarjetaProducto;

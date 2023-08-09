import React from "react";
import TarjetaPizza from "../main/TarjetaProducto";
import { useMostrarDatosPizza } from "../services/pizzaController.js";
function Main() {
  const {data, loading, error}= useMostrarDatosPizza("http://localhost:3000/pizza");

  return (
    <main>
      <div className="main_conteiner-main">
      {loading && <p>Cargando datos...</p>}
      {error && <h1>Ocurrio un error al cargar los datos</h1>}
        <h1 className="main_titulo-style">Pizzas</h1>
        <h2 className="main_subtitulo-style">Ofertas del dia</h2>
        <div  className="tarjeta_continer">{data?.map((datos)=><TarjetaPizza key={datos.id}/>)}</div>
         
      
      </div>
    </main>
  );
}

export default Main;

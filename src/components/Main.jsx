import React from "react";
import TarjetaPizza from "../main/TarjetaProducto";
import { useMostrarDatosPizza } from "../services/pizzaController.js";
function Main() {
  const {data, loading, error}= useMostrarDatosPizza("http://localhost:3000/comidas");

  return (
    <main>
      <div className="main_conteiner-main">
      {loading && <p>Cargando datos...</p>}
      {error && <h1>Ocurrio un error al cargar los datos</h1>}
        <h1 className="main_titulo-style">Pizzas</h1>
        <h2 className="main_subtitulo-style">Ofertas del dia</h2>
       
        {/* //menu........ */}

        <h3 className="main_subtitulo-style">Pizzas</h3>
        <div  className="tarjeta_continer">  
        { data.map(dato => {
        return dato.tipo === "pizza" ? (<TarjetaPizza key={dato.id} dato={dato} />) : null;
        })}
        </div>

        <h3 className="main_subtitulo-style">Empanadas</h3>
        <div  className="tarjeta_continer">  
        { data.map(dato => {
        return dato.tipo === "empanada" ? (<TarjetaPizza key={dato.id} dato={dato} />) : null;
        })}
        </div>

        <h3 className="main_subtitulo-style">Bebidas</h3>
        <div  className="tarjeta_continer">  
        { data.map(dato => {
        return dato.tipo === "bebida" ? (<TarjetaPizza key={dato.id} dato={dato} />) : null;
        })}


        </div>

        
         
      
      </div>
    </main>
  );
}

export default Main;

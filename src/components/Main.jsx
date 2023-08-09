import React from "react";
import TarjetaPizza from "../main/TarjetaProducto";
import { useDatosPizza } from "../controllers/pizzaController.js";
function Main() {
  const {data}= useDatosPizza.useMostrarDatosPizza("http://localhost:3000/pizza");
  console.log(data);
  return (
    <main>
      <div className="main_conteiner-main">
        <h1 className="main_titulo-style">Pizzas</h1>
        <h2 className="main_subtitulo-style">Ofertas del dia</h2>
       {/*  {data?.map((datos)=> <TarjetaPizza key={datos.id}/>)}
 */}
        <TarjetaPizza/>
        <h2 className="main_subtitulo-style">Ofertas del dia</h2>
        <TarjetaPizza/>
        <h2 className="main_subtitulo-style">Ofertas del dia</h2>
        <TarjetaPizza/>
      </div>
    </main>
  );
}

export default Main;

import React from "react";
import Formulario from "../components/formularioingredientes/Formulario";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useMostrarDatosPizza } from "../services/pizzaController";

function IngredientesPizza() {
  const { id } = useParams();
  const { data, loading, error } = useMostrarDatosPizza(
    `http://localhost:3000/comidas/${id}`
  );

  return (
    <div>
      {loading && <p>Cargando datos...</p>}
      {error && <h1>Ocurrio un error al cargar los datos</h1>}
      <Header />
      <h1 className="ingredientes_titulo-ingredientes"> Selecciona ingredientes deseados</h1>
      <div className="ingredientes_conteiner-ingredientes">
        <div className="ingredientes_conteiner-image">
          {" "}
          <img src={data.imagen} alt="pizza" />
        </div>
        <div>
          <Formulario data={data} />{" "}
        </div>
      </div>
    </div>
  );
}

export default IngredientesPizza;

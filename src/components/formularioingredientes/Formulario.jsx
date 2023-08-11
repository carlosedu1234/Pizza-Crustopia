import React from "react";
import { useForm } from "react-hook-form";
import InputsIngredientes from "./InputsIngredientes";

function Formulario({data}) {



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const obtenerValores = (data) => {
    console.log(data);
  };

  

  return (
    <div>

      <form
        className="formulrio_conteiner"
        onSubmit={handleSubmit(obtenerValores)}
      >
        <h2>{data.nombre}</h2>
        <InputsIngredientes  nombre={"queso"} errors={errors} register={register}/>
        <InputsIngredientes  nombre={"piña"} errors={errors} register={register}/>
        <InputsIngredientes  nombre={"pimiento"} errors={errors} register={register}/>
        <InputsIngredientes  nombre={"porciones"} errors={errors} register={register}/>

        <input className="formulrio_boton-formulario" type="submit" />
      </form>
    </div>
  );
}

export default Formulario;

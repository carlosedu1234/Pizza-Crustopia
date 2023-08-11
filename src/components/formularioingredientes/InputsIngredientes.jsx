import React from 'react';

function InputsIngredientes({ nombre, errors, register }) {
  return (
    <div>
      <div className="formulrio_conteiner-datos">
        <label htmlFor={nombre} className='formulrio_texto-label'>{nombre}:</label>
        <input
          id={nombre}
          placeholder={`Digite ${nombre}`}
          autoFocus
          {...register(nombre, {
            required: true,
            maxLength: 15,
          })}
        />
      </div>

      {errors[nombre]?.type === "required" && (
        <div className="formulrio_conteiner-mensaje">
          Porciones de {nombre} Requeridos
        </div>
      )}
      {errors[nombre]?.type === "maxLength" && (
        <div className="formulrio_conteiner-mensaje">Maximo 15 caracteres</div>
      )}
    </div>
  )
}

export default InputsIngredientes;

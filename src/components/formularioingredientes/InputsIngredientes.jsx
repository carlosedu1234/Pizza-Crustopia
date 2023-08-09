import React from 'react';

function InputsIngredientes({ nombre, errors, register }) {
  return (
    <div>
      <div className="conteiner_datos">
        <label htmlFor={nombre} className='texto_label'>{nombre}:</label>
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
        <div className="conteiner_mensaje">
          Porciones de {nombre} Requeridos
        </div>
      )}
      {errors[nombre]?.type === "maxLength" && (
        <div className="conteiner_mensaje">Maximo 15 caracteres</div>
      )}
    </div>
  )
}

export default InputsIngredientes;

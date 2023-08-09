import React from 'react'
import Formulario from '../components/formularioingredientes/Formulario'
import Header from '../components/Header'

function IngredientesPizza() {
  return (
    <div>
        <Header/>
        <h1 className='titulo_ingredientes'> Selecciona ingredientes deseados</h1>
      <div className='conteiner_ingredientes'>
        <div className='conteiner_image'> <img src="/img/pueba.jpg" alt="pizza"/></div>
        <div><Formulario/> </div>
      </div>
    </div>
  )
}

export default IngredientesPizza

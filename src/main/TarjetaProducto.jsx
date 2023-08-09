import React from 'react'
import { useNavigate } from 'react-router-dom'

function TarjetaProducto({comprar}) {
const navegacion=useNavigate();

  return (
    <>
   
      <div className='tarjeta__pizza'>
      <img src="/img/pueba.jpg" alt="pizza"onClick={()=>navegacion("/ingredientesPizza")} />
      <p>Precio : 40000$</p>
      <div className='tarjeta_comprar'><p>Comprar</p> <button onClick={comprar}>+</button>  <button>-</button></div>
      <div className='tarjeta_comprar'><p>Total</p>  <input type="text" readOnly /></div>
      </div>
  
    </>
  )
}

export default TarjetaProducto

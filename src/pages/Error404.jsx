import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error404() {
    const navegacion=useNavigate();
  return (
    <div className='conteiner-img-404'>
        <button onClick={()=>navegacion("/home")}>Volver</button>
      <img src="img/Error404.jpg" alt="error" />
    </div>
  )
}

export default Error404

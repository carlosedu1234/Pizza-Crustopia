import React from 'react'
import "./buscador.css"
import { BiSearchAlt} from 'react-icons/bi';
function Buscador() {
  return (
    <div>
        <div className='conteiner-buscador'> <BiSearchAlt className='icono'/>
        <input className='buscador-style'  type="text" id="busqueda" name="q" placeholder='Busqueda...'/>
       </div>
      
   
     
    
    </div>
  )
}

export default Buscador

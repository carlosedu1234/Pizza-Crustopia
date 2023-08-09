import React from 'react'
import { BiSearchAlt} from 'react-icons/bi';
function Buscador() {
  return (
    <div>
        <div className='buscador_conteiner-buscador'> <BiSearchAlt className='buscador_icono'/>
        <input className='buscador_buscador-style'  type="text" id="busqueda" name="q" placeholder='Busqueda...'/>
       </div>
      
   
     
    
    </div>
  )
}

export default Buscador

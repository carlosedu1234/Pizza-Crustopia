import React from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
const navegacion=useNavigate()

  return (
    <section>
      <div className='header_conteiner-header'><img onClick={()=>navegacion("/home")}src="/img/logo.jpg" alt="logo" /></div>
    </section>
  )
}

export default Header

import React from 'react'
import "./banner.css"
import Buscador from '../buscador/Buscador'
function Banner() {
  return (
    <div className='conteiner-banner'>
      <img src="/img/bannerPizzeria.png" alt="banner" />
      <h2 className='titulo-banner'>De que tienes hambre hoy</h2>
      <Buscador/>
    </div>
  )
}

export default Banner

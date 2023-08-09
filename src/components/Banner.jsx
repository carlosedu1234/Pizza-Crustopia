import React from "react";
import Buscador from "./Buscador";
function Banner() {
  return (
    <div className="banner_conteiner-banner">
      <img src="/img/bannerPizzeria.png" alt="banner" />
      <h2 className="banner_titulo-banner">De que tienes hambre hoy</h2>
      <Buscador />
    </div>
  );
}

export default Banner;

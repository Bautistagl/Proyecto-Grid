import React from 'react'
import Principal from '../index/Principal'
import Principal2 from '../index/Principal2'

const Banner = () => {
  return (
    <div className="textosCar">
    <Principal2 className="animacion-car" />

    <div className="tituloCar">
      <span className="primeraParteCar"> WEB HOSTING </span> Prueba
      nuestros servicios de cloud descentralizado y ahorra en costos de
      alojamiento.
    </div>
    <div className="subtituloCar">
      Our decentralized cloud hosting service offers you the ability to
      scale your applications and data without the need for a
      centralized data center. Say goodbye to high costs and enjoy the
      benefits of distributed computing
    </div>
  </div>
  )
}

export default Banner
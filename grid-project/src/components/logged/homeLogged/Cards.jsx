import React from 'react'

const Cards = ({titulo,link,push,ultimaFecha,icono}) => {
  return (
    <div>
       
    <div className='card-proyecto'>
        <div className='contenedor-flex-proyecto'> 
        <img alt='' src={icono} className='icono-proyecto'/>
        <div className='main-titulos-proyecto'>
            <span> {titulo}</span>
            <h2> {link}</h2>
        </div>
        </div>
        <h3> {push} </h3>
        <h4> {ultimaFecha}</h4>
        


    </div>
    </div>
  )
}

export default Cards
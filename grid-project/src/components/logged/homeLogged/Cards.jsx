import Link from 'next/link'
import React from 'react'

const Cards = ({titulo,link,push,ultimaFecha}) => {
  return (
    <div>
       <Link href='/profile/proyecto'>
    <div className='card-proyecto'>
        <div className='contenedor-flex-proyecto'> 
        <img alt='' src='/iconoGrid3.png' className='icono-proyecto'/>
        <div className='main-titulos-proyecto'>
            <span> {titulo}</span>
            <h2> {link}</h2>
        </div>
        </div>
        <h3> {push} </h3>
        <h4> {ultimaFecha}</h4>
        


    </div>
       </Link>
    </div>
  )
}

export default Cards
import Link from 'next/link'
import React from 'react'

const Paginacion = ({titulo,links}) => {
  return (
    <div className="guia-paginacion">
    <Link href={links}>
      <span className="titulo-guia-paginacion"> Services</span>
    </Link>
    <img className="icono-guia-paginacion" src="/nextDark.png" alt="" />
    <span className="actual-guia=paginacion"> {titulo} </span>
  </div>
  )
}

export default Paginacion
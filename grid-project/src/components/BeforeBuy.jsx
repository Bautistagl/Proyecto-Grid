import Link from 'next/link'
import React from 'react'

const BeforeBuy = () => {
  return (
    <div className='contenedor-before' >
        <h1>It seems that you don't have a project.</h1>
        <span> You need to complete onboarding process in order to use Grid Cloud. </span>
        <button > <Link href='/profile/hosting'> Explore setup </Link> </button>
    </div>
  )
}

export default BeforeBuy

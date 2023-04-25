import React from 'react'

const Banner = () => {
  return (
    <section className='banner-section'>
      <div className='banner-container'>
    <div className="textosBanner">
      <div className='producto-principal'> Asic Mining</div>
    <div className="tituloBanner">
       Power Your  Asic mining Operations with Our Reliable Hosting Solution
    </div>
    <div className="subtituloBanner">
    Our ASIC Mining Hosting service provides you with a secure and stable environment to house your mining rigs. With 24/7 monitoring,
     redundant power and cooling, and expert support,
    you can focus on mining while we take care of the rest. Sign up now to take your mining operations to the next level.
    </div>
  </div>
  <img src='/ilustracion-asicMining2.svg' alt='' className="ilustracion-banner"/> 
         </div>
         <div className='container-botones'>
          <button className='boton-create-asic'> Create account</button>
          <button className='boton-create-asic2'> Contact Sales</button>
           </div>
    </section>
  )
}

export default Banner
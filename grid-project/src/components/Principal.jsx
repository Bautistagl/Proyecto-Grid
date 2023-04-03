import Lottie from 'lottie-web'
import React, { useEffect, useRef } from 'react'



const Principal = () => {

  const container = useRef(null)

  useEffect(()=>{
    Lottie.loadAnimation({
      container: container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData: require('../../public/animGlobe3.json')
    })
  },[])

  return (
   <section className='contenedorPrincipal'>
  
     {/* <div className='textos'>

        <div className='tituloPrincipal'>
       <span className='primeraParte'> ¿Buscas escalabilidad y precios accesibles para tu sitio web? </span>  Prueba nuestros servicios de cloud descentralizado y ahorra en costos de alojamiento.
        </div>
        <div className='subtituloPrincipal'>
        Our decentralized cloud hosting service offers you the ability to scale your applications and data without the need for a centralized data center. Say goodbye to high costs and enjoy the benefits of distributed computing
        </div>
     </div> */}
          <div className='animacion-principal' ref={container}> </div>
          {/* <img className='fotoPrincipal' src={gridLogo1} alt="" /> */}
         
    </section>
  )
}

export default Principal
import React from 'react'



const Segundo = () => {
  return (
   <section className='contenedorSegundo'>
  
     <div className='textos'>

        <div className='tituloSegundo'>
       <span className='primeraParte'> Flux provides a global cloud network </span>  
        </div>
        <div className='subtituloSegundo'>
        Regions: North America, Europe, Asia, South America, Africa, Oceania
           77 geographic location

        </div>
     </div>
          <img className='fotoSegundo' src={"/mapa.png"} alt="" />
    </section>
  )
}

export default Segundo
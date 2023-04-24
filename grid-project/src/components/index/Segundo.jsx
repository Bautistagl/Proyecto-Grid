import Lottie from 'lottie-web'
import React, { useEffect, useRef } from 'react';

const Segundo = () => {
  
  const container = useRef(null)

  useEffect(()=>{
    Lottie.loadAnimation({
      container: container.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData: require('../../../public/animGlobe3.json')
    })
  },[])
  return (
    <section className="contenedorSegundo">
      <div className="textos">
        <div className="tituloSegundo">
          <span className="primeraParte">
            {' '}
            Flux provides a global cloud network{' '}
          </span>
        </div>
        <div className="subtituloSegundo">
          Regions: North America, Europe, Asia, South America, Africa, Oceania
          77 geographic location
        </div>
      </div>
      {/* <img className="fotoSegundo" src={'/mapa.png'} alt="" /> */}
      <div className='animacion-principal2' ref={container} > </div>
    </section>
  );
};

export default Segundo;

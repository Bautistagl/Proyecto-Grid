import useLocalStorage from '@/useLocalStorage'
import React, { useState } from 'react'

const CardPremiumWeb = () => {




  const [opcion, setOpcion] = useLocalStorage('opcion','')

  const seleccionar = () => {
    
    localStorage.setItem('opcion', 1);
  }

  const verStorage = () => {
    console.log(localStorage.getItem(opcion))
  }
  return (
    <div>
          <div className='cardHostingPremium' style={{borderStartEndRadius:"10px"}}>
        <div className='tituloBestOption'> Best option </div>
      
     <span className='saveSpan'> Save up to 73% </span>
     <p className='pSpan'> Premium Web Hosting </p>
     <div className='precioDiv'> 999.00 AR$<span className='precioSpan'>/mes</span> </div>
     <span className='extraSpan'> + 3 meses EXTRA </span>
     <button className='botonHosting'onClick={seleccionar}> Seleccionar </button>
     {/* <button onClick={verStorage}> probadno</button> */}
     <span className='spanGarantia'> El plan se renueva a 899.00 AR$/mes </span>
     < > 
     <span className='spanFeatures'> <img className='iconoFeatures' src='/green.png' alt=''/>100 sitios web  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/yellow.png' alt=''/>100 GB de almacenamiento SSD  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/yellow.png' alt=''/>1 024 MB de RAM  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/yellow.png' alt=''/>1 CPU Core  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/green.png' alt=''/>Email gratuito  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/green.png' alt=''/> SSL ilimitado gratis  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/yellow.png' alt=''/>~25 000 visitas por mes  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/green.png' alt=''/> Creador de páginas web  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/green.png' alt=''/> Optimizado para WordPress </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/red.png' alt=''/>   Herramienta WordPress staging </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/green.png' alt=''/>100 subdominios  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/green.png' alt=''/>Cuentas FTP ilimitadas  </span>
     <span className='spanFeatures'> <img className='iconoFeatures' src='/red.png' alt=''/>   Caché de objetos para WordPress  </span>
     <span className='spanFeatures'style={{borderBottom:"none",borderRight:"none"}}> <img className='iconoFeatures' src='/green.png' alt=''/> Copias de seguridad semanales </span>
     </>
   </div>
    </div>
  )
}

export default CardPremiumWeb
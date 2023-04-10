import React from 'react'

const InfoPersonal = () => {
  return (
    <div className='infoPersonal-container'> 
    <div className='infoPersonal-titulo'>      Account information</div>
    <div className='infoPersonal-informacion' >
        <div className='infoPersonal-titulo-container'> <img className='infoPersonal-iconoPrincipal' src='/infoCard2.png'/> Personal information </div>
        <div className='infoPersonal-subtitulo-container'> La informacion provista a continuacion se reflejara en tu facturas  </div>
        <div className='infoPersonal-renglones-container'>
             <span> Nombre</span> <span style={{color:"#0c1317"}}> Bautista Gonzalez Lazo</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span>  </div>
        <div className='infoPersonal-renglones-container'>
             <span> Direccion </span> <span style={{color:"#0c1317"}}> Argentina</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span>  </div>
        <div className='infoPersonal-renglones-container'>
              <span> Número de teléfono </span><span style={{color:"#0c1317"}}> +54</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span>  </div>
        <div className='infoPersonal-renglones-container'>
             <span> Empresa  </span> <span style={{color:"#0c1317"}}> -</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span>  </div>
        <div className='infoPersonal-renglones-container' style={{borderEndStartRadius:"10px",borderEndEndRadius:"10px"}}> 
              <span> Detalles adicionales </span> <span style={{color:"#0c1317"}}> -</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span>  </div>
    </div>
    <div className='infoPersonal-ajustes'>
    <div className='infoPersonal-titulo-container'> <img  className='infoPersonal-iconoPrincipal' src='/settings.png'/> Account settings </div>
        <div className='infoPersonal-renglones-container'>
             <span> Email </span> <span style={{color:"#0c1317"}}> bautistagonzalezlazo@gmail.com</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span>  </div>
        <div className='infoPersonal-renglones-container'>
             <span>  Change password </span> <span style={{color:"#0c1317", fontFamily:"sans-serif"}}> ••••••••••••</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span> </div>
        <div className='infoPersonal-renglones-container'>
             <span>  Two factor authentication </span> <span style={{color:"#0c1317"}}> Inhabilitado</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span> </div> 
        <div className='infoPersonal-renglones-container' style={{borderEndStartRadius:"10px",borderEndEndRadius:"10px",cursor:"auto"}}>
              <span> Member since</span>  <span style={{color:"#0c1317"}}> 2023-04-04 13:32</span> <span> <img className='infoPersonal-icono' src='/next (4).png'/> </span>  </div>
        
    </div>
    <div className='infoPersonal-permisos'>
  
    <div className='infoPersonal-titulo-container'> <img className='infoPersonal-iconoPrincipal' src='/email.png'/> Permisos de comunicacion </div>
        <div className='infoPersonal-renglones-permisos' style={{borderEndStartRadius:"10px",borderEndEndRadius:"10px"}}>
             <div className='span-permisos'> Promociones, ofertas especiales </div> <div className='span2-permisos' > Correos electrónicos importantes sobre nuestras ofertas especiales</div> <span> </span>  </div>
       
    </div>
    </div>
  )
}

export default InfoPersonal
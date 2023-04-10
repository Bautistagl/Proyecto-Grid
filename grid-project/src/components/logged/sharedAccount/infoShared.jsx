import React from 'react'

const InfoShared = () => {
  return (
    <div className='infoShared-container'> 
    <div className='infoShared-titulo'> Shared Account</div>
  
    <div className='infoShared-permisos'>
    <div className='infoShared-titulo-container'> <img className='infoShared-iconoPrincipal' src='/authorization.png'/> Autorizar acceso </div>
        <div className='infoShared-renglones-permisos' style={{borderEndStartRadius:"10px",borderEndEndRadius:"10px"}}>
             <div className='span2-permisos-shared' > Elige esta opción si cuentas con una persona que crea o administra tu hosting web. Cuando concedas el acceso a tu cuenta, se enviará un correo electrónico de confirmación a la dirección de correo electrónico proporcionada a continuación.</div>
                <button className='button-shared'> Habilitar </button>
              </div>
             <div className='infoShared-titulo-container'> <img className='infoShared-iconoPrincipal' src='/options.png'/>Usuarios que tienen acceso a tu cuenta </div>
        <div className='infoShared-renglones-permisos' style={{borderEndStartRadius:"10px",borderEndEndRadius:"10px"}}>
             <div className='span-permisos'> Promociones, ofertas especiales </div> <div className='span2-permisos-shared' > Correos electrónicos importantes sobre nuestras ofertas especiales</div> </div>
    </div>
    
    </div>
  )
}

export default InfoShared
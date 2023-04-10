import React from 'react'

const InfoSecurity = () => {
    return (
        <> 
        
    <div className='infoSecurity-container'> 
      <div className='infoSecurity-titulo'> Two factor authentication settings</div>
      <div className='permisos-container-security'> 

    <div className='infoSecurity-permisos'>
    <div className='infoSecurity-titulo-container'> <img className='infoSecurity-iconoPrincipal' src='/telefono.png'/> Metodo de autenticacion de la aplicacion </div>
        <div className='infoSecurity-renglones-permisos' style={{borderEndStartRadius:"10px",borderEndEndRadius:"10px"}}>
              <div className='span2-permisos-security' > Vincula el programa de autenticación móvil con tu cuenta de Hostinger. Recomendamos utilizar las siguientes aplicaciones de autenticación:</div>
              <button className='infoSecurity-boton'> Habilitar</button>
                 </div>
    </div>
    <div className='infoSecurity-permisos'>
    <div className='infoSecurity-titulo-container'> <img className='infoSecurity-iconoPrincipal' src='/email.png'/> Metodo de autenticacion de correo electronico </div>
        <div className='infoSecurity-renglones-permisos' style={{borderEndStartRadius:"10px",borderEndEndRadius:"10px"}}>
              <div className='span2-permisos-security' >Con cada inicio de sesión, recibirás un código de confirmación en tu dirección de email. Tu dirección bautistagonzalezlazo@gmail.com se utilizará para esta autenticación.</div>
              <button className='infoSecurity-boton'> Habilitar</button>
              </div>
       
    </div>
      </div>
    </div>
        </>
  )
}

export default InfoSecurity
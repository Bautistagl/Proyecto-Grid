import Paginacion from '@/commons/Paginacion'
import React from 'react'

const InfoSecurity = () => {
    return (
        <> 
        
    <div className='infoSecurity-container'> 
    <div> s</div>
    <Paginacion anterior="Settings" links="/profile" titulo="Billing" />
    <div style={{marginLeft:'300px'}} className="infoShared-titulo"> Two factor authentication</div>
      <div className='permisos-container-security'> 

    <div className='infoSecurity-permisos'>
    <div className='infoSecurity-titulo-container'> <img className='infoSecurity-iconoPrincipal' src='/telefono.png'/> Metodo de autenticacion de la aplicacion </div>
        <div className='infoSecurity-renglones-permisos' style={{borderEndStartRadius:"10px",borderEndEndRadius:"10px"}}>
              <div className='span2-permisos-security' > Vincula el programa de autenticación móvil con tu cuenta de Hostinger. Recomendamos utilizar las siguientes aplicaciones de autenticación:</div>
              <button className='infoSecurity-boton'> Habilitar</button>
                 </div>
    </div>
   
      </div>
    </div>
        </>
  )
}

export default InfoSecurity
import React from 'react'

const Home = () => {
  return (
    <div className='logged-home-container'>
      <div>adsads</div>
    <div className='logged-bienvenida'> Bienvenido/a 👋</div>
    <div className='container-logged'> 
    <div className='subcontainer-logged'> 
    <img className='foto-container-logged' src='https://hpanel-main.hostinger.com/assets/img/HomeHostingCrossSell.197ab14d.png'/>
    </div>
    <div className='subcontainer2-logged'> 
    <div className='titulo-subcontainer-logged'> Creador de sitios web y alojamiento web </div>
    <div className='subtitulo-subcontainer-logged'> Obtenga su plan de alojamiento web y construya su sitio web rapidamente </div>
    <div className='precio-subcontainer-logged'> $20.00 <span className='span-subcontainer-logged'> /month </span> </div>
    <button className='oferta-subcontainer-logged'> Check our plans </button>
    </div>
    </div>


    <div className='container2-logged'> 
    <div className='titulo-subcontainer2-logged' > Look up your domain</div>
    <div className='subtitulo-subcontainer2-logged'> Busque la disponibilidad de nombres de dominio con nuestra herramienta de verificación de dominios. Escriba su nombre deseado y obtenga resultados instantáneos.</div>

      <div className='inputs-subcontainer'> 
    <input className='input-logged-subcontainer' type='input' placeholder='Ingresa el nombre de dominio deseado(opcional)'/> 
    <button  className='buscar-logged-subcontainer'> Search </button>
    </div>
    </div>
    
    
    
    </div>
  )
}

export default Home
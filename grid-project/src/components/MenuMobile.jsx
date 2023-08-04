import React from 'react'

const MenuMobile = () => {
  return (
    <div className='menuMobileContainer'>
        <span className='titulo-mobile'> PRODUCTS </span>
        <div className='categorias-mobile'> 

         <div className='item-mobile'> 
         <div className='circulo'>  <img className='icono-mobile' alt='' src='/webMobile.png'/> </div>
            <div className='subtitulo-mobile' > Web Hosting </div>

        </div>
        <div className='item-mobile'> 
        <div className='circulo'>  <img className='icono-mobile' alt='' src='/gameMobile2.png'/> </div>
            <div className='subtitulo-mobile' > Game Servers </div>

        </div>
        </div>
        <span className='titulo-mobile'> WHY CHOOSE US? </span>
        <div className='categorias-mobile'> 

        <div className='item-mobile'> 
        <div className='circulo'>  <img className='icono-mobile' alt='' src='/solutionsMobile.png'/> </div>
            <div className='subtitulo-mobile' > Solutions</div>

        </div>
        <div className='item-mobile'> 
        <div className='circulo'>  <img className='icono-mobile' alt='' src='/aboutUsMobile.png'/> </div>
            <div className='subtitulo-mobile' > About us </div>

        </div>
        <div style={{marginTop:'20px'}} className='item-mobile'> 
        <div className='circulo'>  <img className='icono-mobile' alt='' src='/blogMobile2.png'/> </div>
            <div  className='subtitulo-mobile' > Blog </div>

        </div>
        </div>
        <span className='titulo-mobile'> CONTACT </span>
        <div style={{marginBottom:'50px'}} className='categorias-mobile'> 

         <div className='item-mobile'> 
         <div className='circulo'>  <img className='icono-mobile' alt='' src='/emailMobile.png'/> </div>
            <div className='subtitulo-mobile' > Send an email </div>

        </div>
        <div className='item-mobile'> 
        <div className='circulo'>  <img className='icono-mobile' alt='' src='/demoMobile.png'/> </div>
            <div className='subtitulo-mobile' > Book a demo </div>

        </div>
        <div style={{marginTop:'20px'}} className='item-mobile'> 
        <div  className='circulo'>  <img className='icono-mobile' alt='' src='/aboutUsMobile.png'/> </div>
            <div className='subtitulo-mobile' > Join our discord </div>

        </div>
        </div>
        
            

    </div>
  )
}

export default MenuMobile
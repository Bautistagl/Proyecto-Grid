import React, { useState } from 'react'
import CardBusinessWeb from '../cardHostingWeb/CardBusinessWeb'
import CardSingleWeb from '../cardHostingWeb/CardSingleWeb'
import CardPremiumWeb from '../cardHostingWeb/CardPremiumWeb'
import CardStarterWord from '../cardHostingWordpress/CardStarterWord'
import CardSingleWord from '../cardHostingWordpress/CardSingleWord'
import CardBusinessWord from '../cardHostingWordpress/CardBusinessWord'
import CardProWord from '../cardHostingWordpress/CardProWord'
import Link from 'next/link'

const HostingWeb = () => {
  const [selected, setSelected] = useState(1);

const toggle = (i) => {
  
    return setSelected(i)
}
  return (
    <> 
    <div>s</div>
    <div className='guia-paginacion'> 
      <Link href="/profile">
      <span className='titulo-guia-paginacion'> Services</span>
      </Link>
      <img className='icono-guia-paginacion' src='/next (4).png' alt=''/>
      <span className='actual-guia=paginacion'> Hosting  </span>
      
     </div>
    <div className='tituloPrincipal-hosting'> Elige tu plan de hosting web </div>
    <div className='contenedor-titulos-hosting-click'> 
    <span className='spanHosting-clickeable' onClick={()=> toggle(0)}> Hosting web </span>
    <span className='spanHosting-clickeable' onClick={()=> toggle(1)}> Hosting Word press</span>
    </div>
    {selected === 0 ? <div className='contenedorHostingWebCompleto'> 
    <div className='FeaturesContainer'>
   
       </div>
       <div className='contenedorCards'>
       
      <CardPremiumWeb/>
      <CardSingleWeb/>
      <CardBusinessWeb/>
      </div>
 

    </div> : ""}
    {selected === 1 ? <div className='contenedorHostingWebCompleto'> 
    <div className='FeaturesContainer'>
       </div>
       <div className='contenedorCards'>
       <CardStarterWord/>
       <CardSingleWord/>
       <CardBusinessWord/>
       <CardProWord/>
      </div>
 

    </div> : ""}
    {selected === 2 ? <div className='contenedorHostingWebCompleto'> 
    <div className='FeaturesContainer'>
       </div>
       <div className='contenedorCards'>
       
      <CardPremiumWeb/>
      <CardSingleWeb/>
      <CardBusinessWeb/>
      </div>
 

    </div> : ""}
    
    
    </>
    
      
  
    
  )
}

export default HostingWeb

import React, { useState } from 'react';
import CardBusinessWeb from '../cardHostingWeb/CardBusinessWeb';
import CardSingleWeb from '../cardHostingWeb/CardSingleWeb';
import CardPremiumWeb from '../cardHostingWeb/CardPremiumWeb';
import CardStarterWord from '../cardHostingWordpress/CardStarterWord';
import CardSingleWord from '../cardHostingWordpress/CardSingleWord';
import CardBusinessWord from '../cardHostingWordpress/CardBusinessWord';
import CardProWord from '../cardHostingWordpress/CardProWord';
import Link from 'next/link';
import Paginacion from '@/commons/Paginacion';
import dynamic from 'next/dynamic';
import NuevasCardsHosting from './NuevasCardsHosting';



const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

const HostingWeb = () => {
  const [selected, setSelected] = useState(0);
  const [selected1, setSelected1] = useState(null);

  const toggle1 = (i) => {
    if (selected1 === i) {
      return setSelected1(null);
    }
    setSelected1(i);
  };

  const toggle = (i) => {
    return setSelected(i);
  };
  return (
    <>
      
      <div>s</div>
      <Paginacion anterior="Services" links="/profile" titulo="Web Hosting" />
      <div className='probando-index'>
    <div style={{opacity:'0'}}>.</div>
      <div className="tituloPrincipal-hosting">
        {' '}
       Choose your deploy service{' '}
      </div>
      
      
      <div className="mydict">

</div>

    <NuevasCardsHosting/>
    {/* <div className='contact-container'> 
            <div className='contact-texts'> 

      
            <div className='contact-titulo2'> Enterprise</div>
            <div className='contact-subtitulo3'> 
                 For companies running at scale.
            </div>
            <div className='contact-subtitulo3'> 
                 Get volume discount along with enterprise-grade support and features
            </div>
            <div className='contact-subtitulo2'> Volume Discount Available</div>
            <div className='contact-subtitulo2'> Starting at 40 vCPU, 80GB RAM</div>
            <button className='contact-button2'>Contact Us</button>
             </div>
          
        </div> */}

        <div className='aboutUs-final2'>

    <h1> Enterprise</h1>
    <h3> Get volume discount along with enterprise-grade support and features</h3>
    <h3> Volume Discount Available</h3>
    
    <div className='contenedor-flex'> 

    <button className='botones-aboutUs' > Contact Us </button>
    <button className='botones-aboutUs2'> Book a Demo </button>
    </div>
    
</div>


      <div style={{opacity:'0'}}>.</div>
      </div>
      <div style={{opacity:'0'}}>.</div>
    </>
  );
};



export default HostingWeb;



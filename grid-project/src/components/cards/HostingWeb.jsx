import React, { useState } from 'react';

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
      
      <div className='probando-index'>
    <div style={{opacity:'0'}}>.</div>
      <div className="tituloPrincipal-hosting">
        {' '}
       Choose your deploy service{' '}
      </div>
      
      
      <div className="mydict">

</div>

    <NuevasCardsHosting/>


        <div className='aboutUs-final2'>

    <h1> Enterprise</h1>
    <h3> Get volume discount along with enterprise-grade support and features</h3>
    <h3> Volume Discount Available</h3>
    
    <div className='contenedor-flex2'> 

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



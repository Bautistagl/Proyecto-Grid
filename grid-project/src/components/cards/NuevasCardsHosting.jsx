import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const NuevasCardsHosting = () => {
  const opciones = ["Applications", "Web Apps", "Databases"];
  const [indice, setIndice] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);

  const el = useRef(null);
  const typed = useRef(null)
  const options = [
    {
      title: '8 GB MEMORY / 100 GB STORAGE',
      price: '$3.65',
      price1: '$176.76',
      price2: '$79.92',
      price3: '$116.80',
    
    },
    {
      title: '16 GB MEMORY / 100 GB STORAGE',
      price: '$6.49',
      price1: '$323.51',
      price2: '$135.85',
      price3: '$233.60',
    
    },
    {
      title: '32 GB MEMORY / 100 GB STORAGE',
      price: '$12.17',
      price1: '$617.02',
      price2: '$467.20',
      price3: '$247.70',
    
    }

   
  ];
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };
  useEffect(() => {
    const options = {
    	strings: [
        'Run Applications',
        'Run Web Apps',
        'Run Databases'
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      cursorChar: ''
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
      
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="contenedor-nuevas">
   
      <div className="nueva-card-hosting">
      <div className="type-wrap">
        <h1 ref={el}></h1>
      </div>
        <span style={{marginBottom:'13vh'}} className='primer-span'>
        Pay per use and scale indefenitely. The cost of grid cloud includes the underlying cloud provider.
        </span>
        
        <div className='linea-separadora'></div>
        <div className='grid-features-hosting'>
            <span> Deploy from GitHub </span>
            <span> Unlimited Application </span>
            <span> Preview Environments </span>
            <span> Autoscaling </span>
            <span> Jobs & Cron Jobs </span>
            <span> Certificate Management </span>
            <span> Monitoring (30 days retention) </span>
            <span> Logging (7 days retention) </span>
           

        </div>
        <button className='boton-nuevas'> Continue Setup</button>
      </div>
      <div className="nueva-card-hosting2">
       <div className='primera-parte-card'>

        <span className='titulo-card-nueva'> Start Saving Now</span>
        <span className='primer-span'>
          Estimate the cost of your application on different cloud providers
        </span>
        <div className='nueva-card-botones'>

        <button onClick={() => handleOptionClick(0)}>2 vCPU</button>
        <button onClick={() => handleOptionClick(1)}>4 vCPU</button>
        <button onClick={() => handleOptionClick(2)}>8 vCPU</button>
        </div>
        <div className='linea-separadora'></div>

       </div>
       
        {/* <div className='linea-separadora'></div> */}
        <div className='grid-features-hosting2'>
            <span >{options[selectedOption].title}</span>
               <div className='marcas-hosting'>

                <div style={{display:'flex',width:'8vw'}}>
                  <div className='contenedor-icono'>

                <Image alt='' src='/fluxUltimo.png' width={45} height={35}/>
                  </div>
                <h2>FLUX</h2>
                </div>

                <div style={{marginLeft:'5%'}}>
                  <p>{options[selectedOption].price}</p>
                  <span>Includes bandwidth</span>
                </div>

               </div>
               <div className='marcas-hosting'>

                <div style={{display:'flex',width:'8vw'}}>
                  <div className='contenedor-icono'>

                <Image alt='' src='/googleCloud.png' width={45} height={30}/>
                  </div>
                <h2>GOOGLE </h2>
                </div>

                <div style={{marginLeft:'5%'}}>
                  <p>{options[selectedOption].price1}</p>
                  <span>Includes bandwidth</span>
                </div>

               </div>
               <div className='marcas-hosting'>

                <div style={{display:'flex',width:'8vw'}}>
                  <div className='contenedor-icono'>

                <Image alt='' src='/awsLogo.png' width={45} height={30}/>
                  </div>
                <h2>AWS</h2>
                </div>

                <div style={{marginLeft:'5%'}}>
                  <p>{options[selectedOption].price2}</p>
                  <span>Includes bandwidth</span>
                </div>

               </div>
               <div className='marcas-hosting'>

                <div style={{display:'flex',width:'8vw'}}>
                  <div className='contenedor-icono'>

                <Image alt='' src='/azure.png' width={45} height={25}/>
                  </div>
                <h2>AZURE</h2>
                </div>

                <div style={{marginLeft:'5%'}}>
                  <p>{options[selectedOption].price3}</p>
                  <span>Includes bandwidth</span>
                </div>

               </div>
        
           
        </div>
        {/* <button className='boton-nuevas'> Continue Setup</button> */}
      </div>
    </div>
  );
};

export default NuevasCardsHosting;

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const NuevasCardsHosting = () => {
  const opciones = ["Applications", "Web Apps", "Databases"];
  const [indice, setIndice] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);


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
    const intervalId = setInterval(() => {
      // Calcula el próximo índice en el bucle cíclico
      const siguienteIndice = (indice + 1) % opciones.length;
      setIndice(siguienteIndice);
    }, 4000);

    return () => {
      // Limpia el intervalo cuando el componente se desmonta
      clearInterval(intervalId);
    };
  }, [indice, opciones]);

  return (
    <div className="contenedor-nuevas">
   
      <div className="nueva-card-hosting">
        <h1> 
          Run
    {opciones[indice]}
        </h1>
        <span className='primer-span'>
          Pay per use and scale indefenitely on metered billing. Does not
          include cost of the underlying cloud provider.
        </span>
        <h2> $6  <div className='falso-span'> per month </div>  GB RAM </h2>
        <h2> $13 <div className='falso-span'> per month </div> vCPU </h2>
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

       </div>
       
        {/* <div className='linea-separadora'></div> */}
        <div className='grid-features-hosting2'>
            <p>{options[selectedOption].title}</p>
               <div className='marcas-hosting'>
                <Image alt='' src='/IconoFlux.png' width={25} height={25}/>
                <h2>FLUX</h2>
                <div>
                  <p>{options[selectedOption].price}</p>
                  <p>Includes bandwidth</p>
                </div>

               </div>
               <div className='marcas-hosting'>
                <Image alt='' src='/IconoFlux.png' width={25} height={25}/>
                <h2>FLUX</h2>
                <div>
                  <p>{options[selectedOption].price1}</p>
                  <p>Includes bandwidth</p>
                </div>

               </div>
               <div className='marcas-hosting'>
                <Image alt='' src='/IconoFlux.png' width={25} height={25}/>
                <h2>FLUX</h2>
                <div>
                  <p>{options[selectedOption].price2}</p>
                  <p>Includes bandwidth</p>
                </div>

               </div>
               <div className='marcas-hosting'>
                <Image alt='' src='/IconoFlux.png' width={25} height={25}/>
                <h2>FLUX</h2>
                <div>
                  <p>{options[selectedOption].price3}</p>
                  <p>Includes bandwidth</p>
                </div>

               </div>
            {/* <span> Deploy from GitHub </span>
            <span> Unlimited Application </span>
            <span> Preview Environments </span>
            <span> Autoscaling </span>
            <span> Jobs & Cron Jobs </span>
            <span> Certificate Management </span>
            <span> Monitoring (30 days retention) </span>
            <span> Logging (7 days retention) </span> */}
           
        </div>
        {/* <button className='boton-nuevas'> Continue Setup</button> */}
      </div>
    </div>
  );
};

export default NuevasCardsHosting;

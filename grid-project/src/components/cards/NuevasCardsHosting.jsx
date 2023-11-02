import React from 'react';

const NuevasCardsHosting = () => {
  return (
    <div className="contenedor-nuevas">
   
      <div className="nueva-card-hosting">
        <h1> Run Application</h1>
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

        <button>2 vCPU </button>
        <button>4 vCPU </button>
        <button>8 vCPU </button>
        </div>
       </div>
       
        {/* <div className='linea-separadora'></div> */}
        <div className='grid-features-hosting2'>
            <span> Deploy from GitHub </span>
            <span> Unlimited Application </span>
            <span> Preview Environments </span>
            <span> Autoscaling </span>
            <span> Jobs & Cron Jobs </span>
            <span> Certificate Management </span>
            <span> Monitoring (30 days retention) </span>
            <span> Logging (7 days retention) </span>
           
        </div>
        {/* <button className='boton-nuevas'> Continue Setup</button> */}
      </div>
    </div>
  );
};

export default NuevasCardsHosting;

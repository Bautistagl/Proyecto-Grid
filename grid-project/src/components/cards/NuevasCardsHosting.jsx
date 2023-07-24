import React from 'react';

const NuevasCardsHosting = () => {
  return (
    <div className="contenedor-nuevas">
      <div className="nueva-card-hosting">
        <h1> Web Hosting</h1>
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
        <button className='boton-nuevas'> Select</button>
      </div>
      <div className="nueva-card-hosting2">
        <h1> Game Servers</h1>
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
        <button className='boton-nuevas'> Select</button>
      </div>
    </div>
  );
};

export default NuevasCardsHosting;

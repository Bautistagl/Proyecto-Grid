import React from 'react';



const Index = () => {
  return (
    
    <div className="container-asicHosting-Checkout">
      <div>a</div>
      <div className="contenedor-cards-asicHosting">
        <div className="card1-Checkout">
          <div className="primer-titulo-asicHostingCard">
            {' '}
            Hardware Purchase
          </div>
          <div className="infoCard1-Checkout">
            <div className="principal-Card1-Checkout">
              <img
                className="icono-Principal-Card1"
                src="/Antminer-S19-Pro.png"
                alt=""
              />
              <div className="titulos-principal-card1">
                <div
                  className="titulo-principal-card1"
                  style={{ marginBottom: '10px' }}>
                  {' '}
                  Antminer S19j Pro
                </div>
                <div className="subtitulo-Card1-Checkout">
                  {' '}
                  100 TH/s, 3,050 W hide details | $ 2000,00 | Ohio 2, United
                  States{' '}
                </div>
              </div>
            </div>
            <div className="parrafo-card1-checkout">
              {' '}
              The Antminer S19j Pro by Bitmain is a SHA256 ASIC miner. This
              mining machine has a maximum hashrate of 100 TH/s for a power
              consumption of 3050 watts and is a popular choice for Bitcoin
              miners. The S19j Pro comes in variants of 92/96/100/104 TH. For
              large orders, these units might be a mixed combination but the
              overall hashrate of the order will remain the same.{' '}
            </div>
            <div className="iconos-card1-checkout">
              <div>
                {' '}
                <img /> Compass Score: <span> 98.9</span>{' '}
              </div>
              <div>
                {' '}
                <img /> Est. Online Date: <span> 05/15/2023</span>{' '}
              </div>
              <div>
                {' '}
                <img /> Condition: <span> New</span>{' '}
              </div>
              <div>
                {' '}
                <img /> Power: <span> 3050 Watts</span>{' '}
              </div>
              <div>
                {' '}
                <img /> Algorithm: <span> SHA256</span>{' '}
              </div>
              <div>
                {' '}
                <img /> Hashrate: <span> 100 TH/s</span>{' '}
              </div>
            </div>
          </div>
          <div className="precio-asicHosting-card1">
            <div className="texto-precio-asicHosting"> Total cost </div>
            <div className="precio-AsicHosting-card1"> $2000,00</div>
          </div>
        </div>
        <div className="card2-Checkout">
          <div className="titulo-card2-hosting"> Order Summary </div>
          <div className="reservation-card2"> RESERVATION 1</div>
          <div className="contenedor-flex">
            <span> 1 x Antminer S19j Pro 100 TH</span>{' '}
            <div className="precio-AsicHosting-card1"> $2000,00</div>
          </div>
          <div className="contenedor-flex">
            <span> Two Months Security Deposit (Due Today)</span>{' '}
            <div className="precio-AsicHosting-card1"> $351,60</div>
          </div>
          <div className="contenedor-flex">
            <span> One Month Hosting Prepayment (Due Today)</span>{' '}
            <div className="precio-AsicHosting-card1"> $175,80</div>
          </div>
          <div className="contenedor-flex">
            <span> Hosting Term Length</span>{' '}
            <div className="precio-AsicHosting-card1"> 3 years </div>
          </div>
          <div className='metodosPago-asicHosting'>
            <div className='titulo-metodo-pago' > Select a payment method</div>
            <div className='iconos-metodo-de-pago'>
                <div className='miniCard-metodoPago'>
                    <img src='/credit-card.png' alt=''/>
                    <span className='span-minicard'> Credit card</span>
                </div>
                <div className='miniCard-metodoPago'>
                    <img src='/bitcoin.png' alt=''/>
                    <span className='span-minicard'> Crypto</span>
                </div>
                <div className='miniCard-metodoPago'>
                    <img src='/thunderbolt.png' alt=''/>
                    <span className='span-minicard'> Lightning</span>
                </div>
            </div>
    
          </div>
          <div className="contenedor-flex2">
            <span style={{fontFamily:"rouben ligth"}}> Hardware Total:</span>{' '}
            <div className="precio-AsicHosting-card2"> $2000,00</div>
          </div>
          <div className="contenedor-flex2">
            <span style={{fontFamily:"rouben ligth"}}> Total Hosting Prepayment:</span>{' '}
            <div className="precio-AsicHosting-card2"> $351,60</div>
          </div>
          <div className="contenedor-flex2">
            <span style={{fontFamily:"rouben ligth"}}> Total Security Deposit:</span>{' '}
            <div className="precio-AsicHosting-card2"> $175,80</div>
          </div>
          <div className="contenedor-flex2">
            <span style={{fontFamily:"rouben ligth"}}> Sales Tax</span>{' '}
            <div className="precio-AsicHosting-card2"> $130,00</div>
          </div>
          <div className="contenedor-flex2">
            <span style={{fontFamily:"rouben", fontWeight:"bolder"}}> Due Today: </span>{' '}
            <div className="precio-AsicHosting-card2"> $5314,17</div>
          </div>
          <div className='contenedor-agree'>
          <input className='check-asicHosting' type="checkbox" />
            <div> I have read and agree to the Compass Hardware Purchase Agreement </div>
           </div>
           <div className='contenedor-agree'>
           <input className='check-asicHosting' type="checkbox" />
            <div> I have read and agree to the Compass Hosting Service Agreement </div>
           </div>
           <div className='contenedor-agree'>
           <input className='check-asicHosting' type="checkbox" />
            <div> I acknowledge that all sales are final and Compass Mining will not offer refunds or exchanges </div>
           </div>
           <button className='boton-asicHosting-checkout'> Place Order</button>
        </div>
      </div>
      
    </div>
  );
};

export default Index;

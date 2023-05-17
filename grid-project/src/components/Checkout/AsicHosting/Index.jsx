import ItemCheckout from '@/commons/ItemCheckout';
import React from 'react';

const Index = () => {
  return (
    <div className='container-asicHosting-Checkout'>
      <div>a</div>
      <div style={{color:"black"}} className='tituloPrincipal-hosting'> Order Checkout </div>
    
      <div className='lineaDeTitulo'></div>
      <div className="contenedor-cards-asicHosting">
        <div className="card1-Checkout">
          <div className="primer-titulo-asicHostingCard">
            {' '}
            Shopping Cart
          </div>

              <ItemCheckout
            producto='Antminer S19j Pro'
            icono='/Antminer-S19-Pro.png'
            features='100 TH/s, 3,050 W | $ 2000,00 | Ohio 2, United
            States'
          />
             <ItemCheckout
            producto='Antminer S19j Pro'
            icono='/Antminer-S19-Pro.png'
            features='100 TH/s, 3,050 W | $ 2000,00 | Ohio 2, United
            States'
          />
             <ItemCheckout
            producto='Antminer S19j Pro'
            icono='/Antminer-S19-Pro.png'
            features='100 TH/s, 3,050 W | $ 2000,00 | Ohio 2, United
            States'
          />
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
          <div className="metodosPago-asicHosting">
            <div className="titulo-metodo-pago"> Select a payment method</div>
            <div className="iconos-metodo-de-pago">
              <div className="miniCard-metodoPago">
                <img src="/credit-card.png" alt="" />
                <span className="span-minicard"> Credit card</span>
              </div>
              <div className="miniCard-metodoPago">
                <img src="/bitcoin.png" alt="" />
                <span className="span-minicard"> Crypto</span>
              </div>
              <div className="miniCard-metodoPago">
                <img src="/thunderbolt.png" alt="" />
                <span className="span-minicard"> Lightning</span>
              </div>
            </div>
          </div>
          <div className="contenedor-flex2">
            <span style={{ fontFamily: 'rouben ligth' }}> Hardware Total:</span>{' '}
            <div className="precio-AsicHosting-card2"> $2000,00</div>
          </div>
          <div className="contenedor-flex2">
            <span style={{ fontFamily: 'rouben ligth' }}>
              {' '}
              Total Hosting Prepayment:
            </span>{' '}
            <div className="precio-AsicHosting-card2"> $351,60</div>
          </div>
          <div className="contenedor-flex2">
            <span style={{ fontFamily: 'rouben ligth' }}>
              {' '}
              Total Security Deposit:
            </span>{' '}
            <div className="precio-AsicHosting-card2"> $175,80</div>
          </div>
          <div className="contenedor-flex2">
            <span style={{ fontFamily: 'rouben ligth' }}> Sales Tax</span>{' '}
            <div className="precio-AsicHosting-card2"> $130,00</div>
          </div>
          <div className="contenedor-flex2">
            <span style={{ fontFamily: 'rouben', fontWeight: 'bolder' }}>
              {' '}
              Due Today:{' '}
            </span>{' '}
            <div className="precio-AsicHosting-card2"> $5314,17</div>
          </div>
          <div className="contenedor-agree">
            <input className="check-asicHosting" type="checkbox" />
            <div>
              {' '}
              I have read and agree to the Compass Hardware Purchase Agreement{' '}
            </div>
          </div>
          <div className="contenedor-agree">
            <input className="check-asicHosting" type="checkbox" />
            <div>
              {' '}
              I have read and agree to the Compass Hosting Service Agreement{' '}
            </div>
          </div>
          <div className="contenedor-agree">
            <input className="check-asicHosting" type="checkbox" />
            <div>
              {' '}
              I acknowledge that all sales are final and Compass Mining will not
              offer refunds or exchanges{' '}
            </div>
          </div>
          <button className="boton-asicHosting-checkout"> Place Order</button>
        </div>
      </div>
    </div>
    
  );
};

export default Index;

import CardsFeatures from '@/commons/CardsFeatures';
import React from 'react';

const BuyProd = () => {
  return (
    <div className="buyProdContainer">
      <div>a</div>
      <div style={{color:"black"}} className='tituloPrincipal-hosting'> Product Summary </div>
      <div className="buyProdCard">
        <div className="titulo-buy-prod"> Web Hosting </div>
        <div className="contenedor-cards-buyProd">
          <CardsFeatures
            titulo="Low cost"
            parrafo=" Our location in Argentina allows us to offer highly competitive electricity rates for bitcoin mining."
            foto="/lowCost.png"
          />
          <CardsFeatures
            titulo="Low cost"
            parrafo=" Our location in Argentina allows us to offer highly competitive electricity rates for bitcoin mining."
            foto="/lowCost.png"
          />
          <CardsFeatures
            titulo="Low cost"
            parrafo=" Our location in Argentina allows us to offer highly competitive electricity rates for bitcoin mining."
            foto="/lowCost.png"
          />
        </div>
        <div className='botonera-BuyProd'> 
        <button> Add to cart </button>
        <div > $2000,00</div>
        </div>
      </div>
    </div>
  );
};

export default BuyProd;

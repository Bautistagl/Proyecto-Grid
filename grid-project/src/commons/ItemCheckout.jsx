import React, { useState } from 'react';

const ItemCheckout = ({ producto, features, icono }) => {
 
  return (
    <div className='checkOut-singular'>

        <img className="icono-Principal-Card1" src={`${icono}`} alt="" />
        <div className="titulos-principal-card1">
          <div
            className="titulo-principal-card1"
            style={{ marginBottom: '10px' }}>
            {' '}
            {producto}
          </div>
          <div className="subtitulo-Card1-Checkout"> {features} </div>
        
        
          </div>
    </div>
      
        
     
 
  );
};

export default ItemCheckout;

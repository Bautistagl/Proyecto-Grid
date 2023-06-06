import BillingForms from '@/commons/BillingForms';
import Paginacion from '@/commons/Paginacion';
import React, { useState } from 'react';

const BillingInfo = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    return setSelected(i);
  };
  return (
    <div>
      <div>s</div>
      <Paginacion links="/profile" titulo="Billing" />

      <div className="tituloPrincipal-hosting">Billing</div>
      <div className="contenedor-titulos-hosting-click">
        <span
          className={`spanHosting-clickeable${selected === 0 ? 'focus' : ''}`}
          onClick={() => toggle(0)}>
          {' '}
          Outstanding Invoices{' '}
        </span>
        <span
          className={`spanHosting-clickeable${selected === 1 ? 'focus' : ''}`}
          onClick={() => toggle(1)}>
          {' '}
          Payment History & Credits
        </span>
        <span
          className={`spanHosting-clickeable${selected === 2 ? 'focus' : ''}`}
          onClick={() => toggle(2)}>
          {' '}
          Automatic Payments
        </span>
      </div>
      <div className="container-general-billing">
        
        <BillingForms
          titulo='Invoice Type'
          op1="All"
          op2="Web Hosting"
          op3="Email"
          op4="Hardware"
          op5="Asic Hosting"
        />
        <BillingForms
          titulo='Due Date'
          op1="Select a Range"
          op2="$0 - 1,000"
          op3="$1,000 - 10,000"
          op4="10,000 - 100,000"
          op5="More than $100,000"
        />
        <BillingForms
          titulo='Amount'
          op1="All"
          op2="Credits"
          op3="Wallet"
          op4="Both"
          op5="None"
        />
        <BillingForms
        titulo='Applied funds'
        op1="este es el calendario" />
      </div>
      <div className='contenedor-invoices'> 
        <span> Looks like you dont have any outstanding invoices currently </span>
      
      </div>
    </div>
  );
};

export default BillingInfo;

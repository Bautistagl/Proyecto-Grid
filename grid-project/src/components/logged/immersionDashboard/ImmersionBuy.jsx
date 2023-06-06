import Paginacion from '@/commons/Paginacion'
import FaqsImmersion from '@/components/FaqsImmersion';
import CardBusinessWeb from '@/components/cardHostingWeb/CardBusinessWeb';
import CardPremiumWeb from '@/components/cardHostingWeb/CardPremiumWeb';
import CardSingleWeb from '@/components/cardHostingWeb/CardSingleWeb';
import CardBusinessWord from '@/components/cardHostingWordpress/CardBusinessWord';
import CardProWord from '@/components/cardHostingWordpress/CardProWord';
import CardSingleWord from '@/components/cardHostingWordpress/CardSingleWord';
import CardStarterWord from '@/components/cardHostingWordpress/CardStarterWord';
import Link from 'next/link';
import React, { useState } from 'react'

const ImmersionBuy = () => {

    const [selected, setSelected] = useState(0);
    const [selected2, setSelected2] = useState(null);

    const toggle = (i) => {
        return setSelected(i);
      };

      const toggle2 = (i) => {
        if (selected2 === i) {
          return setSelected2(null);
        }
        setSelected2(i);
      };

  return (
    <div>


<div>s</div>
      <Paginacion links="/profile" titulo="Immersion cooling" />
      <div className="tituloPrincipal-hosting">
        {' '}
        Elige tu plan de Immersion cooling{' '}
      </div>
      <div className="contenedor-titulos-hosting-click">
        <span
          className={`spanHosting-clickeable${selected === 0 ? 'focus' : ''}`}
          onClick={() => toggle(0)}>
          {' '}
          Hardware{' '}
        </span>
        <span
          className={`spanHosting-clickeable${selected === 1 ? 'focus' : ''}`}
          onClick={() => toggle(1)}>
          {' '}
          Service
        </span>
      </div>
      {selected === 0 ? (
        <div className="cards-productos-asicHosting">
        <div className="card-asicHosting">
          <div className="textos-card-asicHosting">
            <div className="titulo-asicHosting"> Grid Box A1</div>
            <div className="velocidad-asicHosting"> 100 TH/s | 3050w</div>
            <div className="precio-asicHosting"> $1,900</div>
            <div className="botones-popUp">
              <Link href="/profile/asicCheckout">
                <button className="boton-asicHosting"> Buy Now </button>
              </Link>
              <button
                className="boton-asicHosting"
                onClick={() => {
                  setPopUp(!popUp);
                }}>
                {' '}
                Details{' '}
              </button>
            </div>
          </div>
          <img className="foto-asicHosting" src="/HardwareMinero.png" alt="" />

          <div className="calificacion-asicHosting">
            Home Mining ASICs are currently not scored
          </div>
        </div>
        <div className="card-asicHosting">
          <div className="textos-card-asicHosting">
            <div className="titulo-asicHosting"> Grid Box A2</div>
            <div className="velocidad-asicHosting"> 100 TH/s | 3050w</div>
            <div className="precio-asicHosting"> $1,900</div>
            <div className="botones-popUp">
              <Link href="/profile/asicCheckout">
                <button className="boton-asicHosting"> Buy Now </button>
              </Link>
              <button
                className="boton-asicHosting"
                onClick={() => {
                  setPopUp(!popUp);
                }}>
                {' '}
                Details{' '}
              </button>
            </div>
          </div>
          <img className="foto-asicHosting" src="/HardwareMinero.png" alt="" />

          <div className="calificacion-asicHosting">
            Home Mining ASICs are currently not scored
          </div>
        </div>
        <div className="card-asicHosting">
          <div className="textos-card-asicHosting">

            <div className="titulo-asicHosting"> Grid Box A3</div>
            <div className="velocidad-asicHosting"> 100 TH/s | 3050w</div>
            <div className="precio-asicHosting"> $1,900</div>
              <div className="botones-popUp">
              <Link href="/profile/asicCheckout">
                <button className="boton-asicHosting"> Buy Now </button>
              </Link>
              <button
                className="boton-asicHosting"
                onClick={() => {
                  setPopUp(!popUp);
                }}>
                {' '}
                Details{' '}
              </button>
            </div>
          </div>
          <img className="foto-asicHosting" src="/HardwareMinero.png" alt="" />

          <div className="calificacion-asicHosting">
            Home Mining ASICs are currently not scored
          </div>
        </div>
      </div>
      ) : (
        ''
      )}
      {selected === 1 ? (
        <div className="contenedorHostingWebCompleto">
          <div className="contenedorCards2">
            <CardStarterWord />
            <CardSingleWord />
            <CardBusinessWord />
            <CardProWord />
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="tituloPrincipal-hosting"> FAQs</div>

<section className="faqs-container-asicHosting">
  <div className="accordion-asicHosting">
    {data.map((item, i) => (
      <div key={i} className={selected2 === i ? 'item show' : 'item'}>
        <div
          className={selected2 === i ? 'title show' : 'title'}
          onClick={() => toggle2(i)}>
          <h2> {item.question}</h2>
          <span>{selected2 === i ? '▲' : '▼'}</span>
        </div>
        <div
          className={
            selected2 === i
              ? 'content show asicHosting'
              : 'content asicHosting'
          }>
          {item.answer}
        </div>
        
      </div>
    ))}
  </div>
</section>
{/* <FaqsImmersion/> */}
<div>s</div>
    </div>
    
  )
};
const data = [
  {
    question: 'What is immersion cooling?',
    answer:
      'Immersion cooling is a technique used to cool computer hardware, such as ASICs used for cryptocurrency mining. It involves submerging the equipment in a bath of dielectric fluid, which conducts heat away from the equipment and keeps it at a stable temperature',
  },
  {
    question: 'What are the benefits of immersion cooling?',
    answer:
      'Immersion cooling provides numerous benefits, including higher mining efficiency, extended equipment lifespan, reduced noise pollution, and the ability to mine in any location without restrictions related to noise pollution.',
  },
  {
    question: 'Is immersion cooling safe for my equipment?',
    answer:
      'Yes, immersion cooling is safe for computer hardware when used properly. The dielectric fluid used in immersion cooling is non-conductive, non-corrosive, and non-flammable, making it safe for use with electronics.',
  },
  
];

export default ImmersionBuy
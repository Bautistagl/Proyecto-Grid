import Link from 'next/link';
import React, { useState } from 'react';

const Index = () => {

  const [selected, setSelected] = useState(null);

const toggle = (i) => {
  if(selected === i) {
    return setSelected(null)
  }
  setSelected(i)
}
  return (
    <div className="container-asicHosting">
      <div>a</div>
      <div className="guia-paginacion">
        <Link href="/profile">
          <span className="titulo-guia-paginacion"> Services</span>
        </Link>
        <img className="icono-guia-paginacion" src="/next (4).png" alt="" />
        <span className="actual-guia=paginacion"> Asic Mining </span>
      </div>
        <div className="tituloPrincipal-hosting">
        
        My miners
      </div>
      <div className='tituloPrincipal-asicHosting'> My miners </div>
      <div className='lineaTitulo-asic'> </div>
      <div className="cards-productos-asicHosting">
        <div className="card-asicHosting">
          <div className="textos-card-asicHosting">
            <div className="primer-texto-asicHosting"> Bitmain</div>
            <div className="titulo-asicHosting"> Antminer S19j Pro</div>
            <div className="velocidad-asicHosting"> 100 TH/s | 3050w</div>
            <div className="precio-asicHosting"> $1,900</div>
            <Link href="/profile/asicCheckout">
            <button className="boton-asicHosting"> Buy Now </button>
            </Link>
          </div>
          <img className="foto-asicHosting" src="/HardwareMinero.png" alt="" />

          <div className="calificacion-asicHosting">
            
            Home Mining ASICs are currently not scored
          </div>
          
        </div>
        <div className="card-asicHosting">
          <div className="textos-card-asicHosting">
            <div className="primer-texto-asicHosting"> Bitmain</div>
            <div className="titulo-asicHosting"> Antminer S19j Pro</div>
            <div className="velocidad-asicHosting"> 100 TH/s | 3050w</div>
            <div className="precio-asicHosting"> $1,900</div>
            <button className="boton-asicHosting"> Buy Now </button>
          </div>
          <img className="foto-asicHosting" src="/HardwareMinero.png" alt="" />

          <div className="calificacion-asicHosting">
            
            Home Mining ASICs are currently not scored
          </div>
          
        </div>
        <div className="card-asicHosting">
          <div className="textos-card-asicHosting">
            <div className="primer-texto-asicHosting"> Bitmain</div>
            <div className="titulo-asicHosting"> Antminer S19j Pro</div>
            <div className="velocidad-asicHosting"> 100 TH/s | 3050w</div>
            <div className="precio-asicHosting"> $1,900</div>
            <button className="boton-asicHosting"> Buy Now </button>
          </div>
          <img className="foto-asicHosting" src="/HardwareMinero.png" alt="" />

          <div className="calificacion-asicHosting">
            
            Home Mining ASICs are currently not scored
          </div>
          
        </div>
      </div>
      <div className="card-not-mining">
        <img src="/placeholderMyMiners.png" alt="" />
        <div className="info-not-mining">
          <div className="titulo-not-mining">
          It seems that you haven`t configured any miners yet. Let`s begin mining.
          </div>
          <div className="subtitulo-not-mining">
            
            Get started mining with us by purchasing a hosting package from our
            product offerings.
          </div>
          <button className="boton-not-mining"> Start Mining </button>
        </div>
      </div>
      <div className="tituloPrincipal-hosting"> FAQs</div>
      
      <section className="faqs-container-asicHosting">
        <div className="accordion-asicHosting">
          {data.map((item, i) => (
            <div key={i} className={selected === i ? 'item show' : 'item'}>
              <div
                className={selected === i ? 'title show' : 'title'}
                onClick={() => toggle(i)}>
                <h2> {item.question}</h2>
                <span>{selected === i ? '▲' : '▼'}</span>
              </div>
              <div className={selected === i ? 'content show asicHosting' : 'content asicHosting'}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
        <div>a</div>
    </div>
  );
};


const data = [
  {
    question: 'What is asic hosting?',
    answer:
      'ASIC hosting is a service that allows miners to house their mining equipment in a secure data center with reliable power, cooling, and connectivity. This allows miners to access the benefits of mining without having to manage the complex infrastructure and costs of running the equipment themselves.    ',
  },
  {
    question:
      'How does ASIC hosting work?',
    answer:
      'ASIC hosting works by allowing miners to lease space in a secure data center to house their mining equipment. The data center provides reliable power, cooling, and connectivity to ensure optimal mining performance. Miners can remotely monitor and manage their equipment from anywhere with an internet connection.',
  },
  {
    question:
      'What is the benefit of ASIC hosting?',
    answer:
      'ASIC hosting provides several benefits over home hosting. Hosting at a secure data center with reliable power and connectivity ensures better uptime and mining performance. It also eliminates the costs and complexities of maintaining the infrastructure needed to run ASIC mining equipment at home, such as cooling and electricity.',
  },
  {
    question: 'What is the cost of ASIC hosting?',
    answer:
      'The cost of ASIC hosting varies depending on the hosting provider, the size of the mining operation, and the specific services required. Typically, costs include a base fee for hosting space and power usage, as well as additional fees for maintenance, monitoring, and support services.',
  },
  {
    question: 'What coins can be mined with an ASIC hosting service?',
    answer:
      'At the moment we offer Asic hosting for Btc miners.',
  },
  {
    question: 'How long does it take to set up and start my ASIC mining equipment with a hosting service?',
    answer:
      'The time it takes to configure and launch the ASIC mining equipment depends on the provider and the shipping time. ',
  },
];

export default Index;



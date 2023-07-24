import React, { useState } from 'react';
import CardBusinessWeb from '../cardHostingWeb/CardBusinessWeb';
import CardSingleWeb from '../cardHostingWeb/CardSingleWeb';
import CardPremiumWeb from '../cardHostingWeb/CardPremiumWeb';
import CardStarterWord from '../cardHostingWordpress/CardStarterWord';
import CardSingleWord from '../cardHostingWordpress/CardSingleWord';
import CardBusinessWord from '../cardHostingWordpress/CardBusinessWord';
import CardProWord from '../cardHostingWordpress/CardProWord';
import Link from 'next/link';
import Paginacion from '@/commons/Paginacion';
import dynamic from 'next/dynamic';
import NuevasCardsHosting from './NuevasCardsHosting';



const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

const HostingWeb = () => {
  const [selected, setSelected] = useState(0);
  const [selected1, setSelected1] = useState(null);

  const toggle1 = (i) => {
    if (selected1 === i) {
      return setSelected1(null);
    }
    setSelected1(i);
  };

  const toggle = (i) => {
    return setSelected(i);
  };
  return (
    <>
      
      <div>s</div>
      <Paginacion anterior="Services" links="/profile" titulo="Web Hosting" />
      <div className='probando-index'>
    <div style={{opacity:'0'}}>.</div>
      <div className="tituloPrincipal-hosting">
        {' '}
       Choose your deploy service{' '}
      </div>
      
      
      <div className="mydict">

</div>

    <NuevasCardsHosting/>
    {/* <div className='contact-container'> 
            <div className='contact-texts'> 

      
            <div className='contact-titulo2'> Enterprise</div>
            <div className='contact-subtitulo3'> 
                 For companies running at scale.
            </div>
            <div className='contact-subtitulo3'> 
                 Get volume discount along with enterprise-grade support and features
            </div>
            <div className='contact-subtitulo2'> Volume Discount Available</div>
            <div className='contact-subtitulo2'> Starting at 40 vCPU, 80GB RAM</div>
            <button className='contact-button2'>Contact Us</button>
             </div>
          
        </div> */}

        <div className='aboutUs-final2'>

    <h1> Enterprise</h1>
    <h3> Get volume discount along with enterprise-grade support and features</h3>
    <h3> Volume Discount Available</h3>
    
    <div className='contenedor-flex'> 

    <button className='botones-aboutUs' > Contact Us </button>
    <button className='botones-aboutUs2'> Book a Demo </button>
    </div>
    
</div>





      <div className="tituloPrincipal-hosting"> FAQs</div>

      <section className="faqs-container-asicHosting">
        <div className="accordion-asicHosting">
          {data.map((item, i) => (
            <div key={i} className={selected1 === i ? 'item show' : 'item'}>
              <div
                className={selected1 === i ? 'title show' : 'title'}
                onClick={() => toggle1(i)}>
                <h2> {item.question}</h2>
                <span>{selected1 === i ? '▲' : '▼'}</span>
              </div>
              <div
                className={
                  selected1 === i
                    ? 'content show asicHosting'
                    : 'content asicHosting'
                }>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div style={{opacity:'0'}}>.</div>
      </div>
      <div style={{opacity:'0'}}>.</div>
    </>
  );
};

const data = [
  {
    question: 'What is asic hosting?',
    answer:
      'ASIC hosting is a service that allows miners to house their mining equipment in a secure data center with reliable power, cooling, and connectivity. This allows miners to access the benefits of mining without having to manage the complex infrastructure and costs of running the equipment themselves.    ',
  },
  {
    question: 'How does ASIC hosting work?',
    answer:
      'ASIC hosting works by allowing miners to lease space in a secure data center to house their mining equipment. The data center provides reliable power, cooling, and connectivity to ensure optimal mining performance. Miners can remotely monitor and manage their equipment from anywhere with an internet connection.',
  },
  {
    question: 'What is the benefit of ASIC hosting?',
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
    answer: 'At the moment we offer Asic hosting for Btc miners.',
  },
  {
    question:
      'How long does it take to set up and start my ASIC mining equipment with a hosting service?',
    answer:
      'The time it takes to configure and launch the ASIC mining equipment depends on the provider and the shipping time. ',
  },
];

export default HostingWeb;



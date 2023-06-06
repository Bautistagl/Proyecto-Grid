import FaqsClassic from '@/commons/FaqsClassic'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';

const FaqsImmersion = () => {
    const [expandedCount, setExpandedCount] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Percentage of element visibility to trigger the animation
      });
      const fadeInStylesLeft = {
        opacity: 1,
        transform: 'translateX(50px)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
      };
  return (
    <>
     <div className="titulo-faqsImmersion">Frequently Asked Questions</div>
    <div className='container-faqs-immersion'>

    <div
            ref={ref}
            style={inView ? fadeInStylesLeft : {}}
             className='primer-container-faqs'> 
        <FaqsClassic 
            pregunta="What is asic hosting?"
            respuesta="ASIC hosting is a service that allows miners to house their mining equipment in a secure data center with reliable power, cooling, and connectivity. This allows miners to access the benefits of mining without having to manage the complex infrastructure and costs of running the equipment themselves."
            setExpandedCount={setExpandedCount}
        />
        <FaqsClassic 
            pregunta="How does ASIC hosting work?"
            respuesta="ASIC hosting works by allowing miners to lease space in a secure data center to house their mining equipment. The data center provides reliable power, cooling, and connectivity to ensure optimal mining performance. Miners can remotely monitor and manage their equipment from anywhere with an internet connection."
            setExpandedCount={setExpandedCount}
        />
        <FaqsClassic 
            pregunta="What coins can be mined with an ASIC hosting service?"
            respuesta="At the moment we offer Asic hosting for Btc miners. "
            setExpandedCount={setExpandedCount}
           
        />
        </div>
    </div>
    
    </>
  )
}

export default FaqsImmersion
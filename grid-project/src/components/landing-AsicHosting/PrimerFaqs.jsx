import FaqsClassic from '@/commons/FaqsClassic'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';

const PrimerFaqs = () => {
    const [expandedCount, setExpandedCount] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Percentage of element visibility to trigger the animation
      });
     
      const fadeInStylesRight = {
        opacity: 1,
        transform: 'translateX(50px)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
      };
      const [ref2, inView2] = useInView({
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
    <div className="titulo-faqs2">Frequently Asked Questions</div>
    <div className='container-faqs-general'>
        <div
            ref={ref2}
            style={inView2 ? fadeInStylesLeft : {}}
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
        <div 
        ref={ref}
        style={inView ? fadeInStylesRight : {}}
        className='segundo-container-faqs'> 
        <FaqsClassic 
            pregunta="What is the cost of ASIC hosting?"
            respuesta="The cost of ASIC hosting varies depending on the hosting provider, the size of the mining operation, and the specific services required. Typically, costs include a base fee for hosting space and power usage, as well as additional fees for maintenance, monitoring, and support services."
            setExpandedCount={setExpandedCount}
        />
        <FaqsClassic 
             pregunta="What is the benefit of ASIC hosting?"
             respuesta="ASIC hosting provides several benefits over home hosting. Hosting at a secure data center with reliable power and connectivity ensures better uptime and mining performance. It also eliminates the costs and complexities of maintaining the infrastructure needed to run ASIC mining equipment at home, such as cooling and electricity."
             setExpandedCount={setExpandedCount}
        />
        <FaqsClassic 
            pregunta="How long does it take to set up and start my ASIC mining equipment with a hosting service?"
            respuesta="The time it takes to configure and launch the ASIC mining equipment depends on the provider and the shipping time. "
            setExpandedCount={setExpandedCount}
        />

        </div>

    </div>
    </>
  )
}

export default PrimerFaqs
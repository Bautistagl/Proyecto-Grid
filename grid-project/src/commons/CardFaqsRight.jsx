import Guarantee from '@/commons/Guarantee';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const CardFaqsRight = ({pregunta,respuesta}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.7, // Percentage of element visibility to trigger the animation
  });
 
  const fadeInStylesRight = {
    opacity: 1,
    transform: 'translateX(-60px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };
  return (
    <div
    ref={ref}
    style={inView ? fadeInStylesRight : {}}
    className="faqsCard">
      <div className="faqsCard-pregunta"> {pregunta} </div>
      <span>
      {respuesta}
      </span>
    </div>
  );
};

export default CardFaqsRight;

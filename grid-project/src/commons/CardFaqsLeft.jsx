import Guarantee from '@/commons/Guarantee';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const CardFaqsLeft = ({pregunta,respuesta}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.7, // Percentage of element visibility to trigger the animation
  });
  const fadeInStylesLeft = {
    opacity: 1,
    transform: 'translateX(50px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };

  return (
    <div
    ref={ref}
    style={inView ? fadeInStylesLeft : {}}
    className="faqsCard">
      <div className="faqsCard-pregunta"> {pregunta} </div>
      <span>
      {respuesta}
      </span>
    </div>
  );
};

export default CardFaqsLeft;

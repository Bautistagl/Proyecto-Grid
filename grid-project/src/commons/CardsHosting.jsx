import CardsFeatures from '@/commons/CardsFeatures';
import React, { useEffect, useRef, useState } from 'react';

const CardsHosting = () => {
  const cardsContainerRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = cardsContainerRef.current.offsetTop;
      const containerBottom =
        containerTop + cardsContainerRef.current.offsetHeight;
      const windowBottom = window.pageYOffset + window.innerHeight;

      if (
        windowBottom > containerTop &&
        window.pageYOffset < containerBottom &&
        !isAnimated
      ) {
        cardsContainerRef.current.classList.add('fade-in');
        setIsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimated]);
  return (
    <>
      <div className="titulo-asic"> Best features</div>
      <div className="cardsAsicContainer" ref={cardsContainerRef}>
        <CardsFeatures 
          titulo="Censorship Resistance"
          parrafo=" Decentralized web hosting is censorship-resistant, meaning that it cannot be easily shut down or censored by a single entity. Since the data is stored across a distributed network, there is no central point of control, making it difficult for governments or other authorities to control or restrict access to information. This ensures that content remains accessible and protected from censorship, even in countries with strict censorship laws."
          foto="/lowCost.png"
        />
          <CardsFeatures
          titulo="Increase Lifetime"
          parrafo="Our decentralized web hosting solution powered by Run on Flux infrastructure offers affordable hosting options for individuals and businesses of all sizes. By leveraging the decentralized architecture of Run on Flux, we can offer cost-effective solutions that can fit any budget. With our pay-as-you-go pricing model, you only pay for the resources you use, giving you the flexibility to scale up or down as your needs change. Experience high-quality web hosting at a low cost with our decentralized solution on the reliable Run on Flux network."
          foto="/support.png"
        />
      
      </div>
      
    </>
  );
};

export default CardsHosting;

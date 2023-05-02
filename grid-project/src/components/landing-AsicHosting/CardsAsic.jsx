import CardsFeatures from '@/commons/CardsFeatures';
import React, { useEffect, useRef, useState } from 'react';

const CardsAsic = () => {
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
          titulo="Low cost"
          parrafo=" Our location in Argentina allows us to offer highly competitive electricity rates for bitcoin mining. By minimizing energy costs, our clients can maximize their profits in Bticoin. This translates to a reliable and affordable energy source for our clients."
          foto="/lowCost.png"
        />
          <CardsFeatures
          titulo="Support"
          parrafo=" Our 24/7 technical support is essential for our clients. With reliable and always-available support, our clients can be confident that they will be backed up at all times while conducting bitcoin mining operations."
          foto="/support.png"
        />
          <CardsFeatures
          titulo="Easy-to-use interface"
          parrafo=" Our interface makes mining easy and accessible for everyone. With clear and intuitive controls, you can easily monitor and manage your mining operations, whether you're a beginner or an experienced miner."
          foto="/easy.png"
        />  
      </div>
      
    </>
  );
};

export default CardsAsic;

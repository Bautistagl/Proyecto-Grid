import CardsFeatures from '@/commons/CardsFeatures';
import React, { useEffect, useRef, useState } from 'react';

const CardsImmersion = () => {
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
          titulo="Efficiency"
          parrafo=" Immersion cooling technology allows for efficient mining and increased profitability. Equipment can be harnessed with an affordable power source and immersion cooling to speed up and gain an additional 20-30% efficiency."
          foto="/lowCost.png"
        />
          <CardsFeatures
          titulo="Increase Lifetime"
          parrafo="Our immersion cooling product submerges mining equipment in dielectric oil, reducing dust buildup and high temperatures, and protecting against humidity and oxidation that can damage equipment and shorten its lifespan. This allows for extended equipment lifespan, increased mining efficiency, and added environmental protection."
          foto="/support.png"
        />
          <CardsFeatures
          titulo="Zero sound"
          parrafo="  Immersion cooling eliminates the need for fans and other cooling components, resulting in a quieter mining environment. Additionally, allows for mining operations to take place in any location, as there are no restrictions related to noise pollution."
          foto="/easy.png"
        />  
      </div>
      
    </>
  );
};

export default CardsImmersion;

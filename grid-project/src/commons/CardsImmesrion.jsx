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
          parrafo=" Location matters when it comes to Bitcoin mining, and Argentina has an advantage in offering highly competitive electricity rates. By minimizing energy costs, clients can maximize their profits in Bitcoin. This reliable and affordable energy source allows for efficient mining, as clients can overclock their equipment and gain an additional 20% to 30% of computational power. With this feature, clients can take advantage of Argentina's favorable energy costs and optimize their mining operations for maximum profitability."
          foto="/lowCost.png"
        />
          <CardsFeatures
          titulo="Increase Lifetime"
          parrafo=" Our immersion cooling product, allows equipment to be submerged in dielectric oil, helps to reduce dust buildup, high temperatures, and protects against humidity and oxidation that can significantly impact the lifespan of mining equipment. By using immersion cooling, clients can benefit from extended equipment lifespan, increased mining efficiency, and added protection against environmental factors that can damage equipment"
          foto="/support.png"
        />
          <CardsFeatures
          titulo="Zero sound"
          parrafo=" Immersion cooling eliminates the need for fans and other cooling components, resulting in a quieter mining environment. Additionally, allows for mining operations to take place in any location, as there are no restrictions related to noise pollution."
          foto="/easy.png"
        />  
      </div>
      
    </>
  );
};

export default CardsImmersion;

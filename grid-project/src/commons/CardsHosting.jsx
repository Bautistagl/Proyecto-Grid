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
          titulo="Low Cost"
          parrafo="Our decentralized web hosting solution powered by Run on Flux infrastructure offers affordable hosting options for individuals and businesses of all sizes. By leveraging the decentralized architecture of Run on Flux, we can offer cost-effective solutions that can fit any budget. With our pay-as-you-go pricing model, you only pay for the resources you use, giving you the flexibility to scale up or down as your needs change. Experience high-quality web hosting at a low cost with our decentralized solution on the reliable Run on Flux network"
          foto="/support.png"
        />
          <CardsFeatures
          titulo="No Experience"
          parrafo="Descubre la libertad de tener un sitio web sin preocuparte por la tecnología. Con Grid, nos encargamos de todo, incluso si no estás familiarizado con las nuevas tecnologías descentralizadas. Hacemos que el alojamiento web sea sin estrés y accesible para todos, brindándote una experiencia fácil y confiable en el mundo de la descentralización. "
          foto="/easy.png"
        />
      
      </div>
      
    </>
  );
};

export default CardsHosting;

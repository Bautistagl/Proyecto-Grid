import CardsFeatures from '@/commons/CardsFeatures';
import React, { useEffect, useRef, useState } from 'react';

const CardsHosting = () => {
  const cardsContainerRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const containerTop = cardsContainerRef.current.offsetTop;
  //     const containerBottom =
  //       containerTop + cardsContainerRef.current.offsetHeight;
  //     const windowBottom = window.pageYOffset + window.innerHeight;

  //     if (
  //       windowBottom > containerTop &&
  //       window.pageYOffset < containerBottom &&
  //       !isAnimated
  //     ) {
  //       cardsContainerRef.current.classList.add('fade-in');
  //       setIsAnimated(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [isAnimated]);
  return (
    <div>
      <div className="titulo-asic"> Anything that runs on the cloud can be run on grid cloud</div>
      <div className="subtituloBanner2">Deploy in seconds to runonflux cloud from a Git repo using buildpacks or a dockerfile</div>
      <div className="cardsAsicContainer" >
        <CardsFeatures 
          foto="/awsLogo.png"
        />
          <CardsFeatures
          foto="/Azure.png"
        />
          <CardsFeatures
          foto="/dockerM.png"
        />
           <CardsFeatures 
          foto="/jsLogo.png"
        />
          <CardsFeatures
          foto="/mySqlLogo.png"
        />
          <CardsFeatures
          foto="/pythLogo.svg"
        />
    
      
      </div>
      
    </div>
  );
};

export default CardsHosting;

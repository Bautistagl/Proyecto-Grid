import React, { useEffect, useRef, useState } from 'react';

const CardsAsic = () => {
  const cardsContainerRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = cardsContainerRef.current.offsetTop;
      const containerBottom = containerTop + cardsContainerRef.current.offsetHeight;
      const windowBottom = window.pageYOffset + window.innerHeight;

      if (windowBottom > containerTop && window.pageYOffset < containerBottom && !isAnimated) {
        cardsContainerRef.current.classList.add('fade-in');
        setIsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimated]);
  return (
    <>
      <div className='titulo-asic'> Create and Sell your NFT'S</div>
    <div className="cardsAsicContainer" ref={cardsContainerRef}>
      <div className='cardAsic'>
      <div className='cardIcon'> </div>
        <h1>Set up your wallet</h1>
        <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown specimen book. </span>
      </div>
      <div className='cardAsic'>
        <div className='cardIcon'> </div>
        <h1>Create your colleciton</h1>
        <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown specimen book. </span>
      </div>
      <div className='cardAsic'>
      <div className='cardIcon'> </div>
        <h1>Add your NFT`s</h1>
        <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown specimen book. </span>
      </div>
      <div className='cardAsic' >
      <div className='cardIcon'> </div>
        <h1>List them for sale</h1>
        <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown specimen book. </span>
      </div>
    </div>
    </>
  );
};

export default CardsAsic;

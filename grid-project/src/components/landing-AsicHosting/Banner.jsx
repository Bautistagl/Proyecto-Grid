import React from 'react';
import { useInView } from 'react-intersection-observer';

const Banner = ({ title, subtitle, imageSource, producto, buttonText1, buttonText2 }) => {
  

  return (
   
        <div className="textosBanner">
       
          <div className="tituloBanner">{title}</div>
          <div className="subtituloBanner">{subtitle}</div>
        <div className="container-botones">
          <button className="boton-create-asic">{buttonText1}</button>
          <button className="boton-create-asic2">{buttonText2}</button>
        </div>
      </div>
    
  );
};

Banner.defaultProps = {
  producto: "Asic Mining",
  title:
    'Power Your  Asic mining Operations with Our Reliable Hosting Solution',
  subtitle:
    'Our ASIC Mining Hosting service provides you with a secure and stable environment to house your mining rigs. With 24/7 monitoring, redundant power and cooling, and expert support, you can focus on mining while we take care of the rest. Sign up now to take your mining operations to the next level.',
  imageSource: '/ilustracion-asicMining2.svg',
  buttonText1: 'Create account',
  buttonText2: 'Contact Sales',
};

export default Banner;

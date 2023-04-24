import React, { Component} from "react";
import Slider from "react-slick";
import Principal from "./Principal";
import Link from "next/link";
import Principal2 from "./Principal2";




function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
    src="/previous (1).png"
      className={className}
      style={{ ...style, display: "block",height:"30px"  }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
    src="/next (3).png"
      className={className}
      style={{ ...style, display: "block",height:"30px"  }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {

    state = {
        currentSlide: 0
      };

    handleSlideChange = (index) => {
        this.setState({ currentSlide: index });
      }
      
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow:  <SamplePrevArrow/>,
      afterChange: this.handleSlideChange
    };


    return (
      <section className="car-section">
        
        <Slider className="sliderCar" {...settings}>
        <div className='textosCar'>
        <Principal className="animacion-car"/>

            <div className='tituloCar'>
                <span className='primeraParteCar'> WEB HOSTING  </span>  Prueba nuestros servicios de cloud descentralizado y ahorra en costos de alojamiento.
            </div>
            <div className='subtituloCar'>
                Our decentralized cloud hosting service offers you the ability to scale your applications and data without the need for a centralized data center. Say goodbye to high costs and enjoy the benefits of distributed computing
            </div>
        </div>
        <div className='textosCar'>
        <Principal2 className="animacion-car"/>

<div className='tituloCar'>
    <span className='primeraParteCar'> ASIC MINING </span>  Prueba nuestros servicios de cloud descentralizado y ahorra en costos de alojamiento.
</div>
<div className='subtituloCar'>
    Our decentralized cloud hosting service offers you the ability to scale your applications and data without the need for a centralized data center. Say goodbye to high costs and enjoy the benefits of distributed computing
</div>
</div>
<div className='textosCar'>
<Principal className="animacion-car"/>

<div className='tituloCar'>
    <span className='primeraParteCar'> VPS</span>  Prueba nuestros servicios de cloud descentralizado y ahorra en costos de alojamiento.
</div>
<div className='subtituloCar'>
    Our decentralized cloud hosting service offers you the ability to scale your applications and data without the need for a centralized data center. Say goodbye to high costs and enjoy the benefits of distributed computing
</div>
</div>

        </Slider>
        <section className='card-contenedor'> 
    <div className={ this.state.currentSlide === 0 ? 'card3-selected' : 'card3'}>
      <div className='titulo-card'>
      <Link href="/webHosting">
        Web Hosting
      </Link>
      </div>
    </div>
    <div className={ this.state.currentSlide === 1 ? 'card3-selected' : 'card3'}>
      <div className='titulo-card'>
        Asic Mining
      </div>
      </div>
      <div className={ this.state.currentSlide === 2 ? 'card3-selected' : 'card3'}>
      <div className='titulo-card'>
       VPS
      </div>
      </div>
    </section>
      </section>
    );
  }
}
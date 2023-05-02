import Guarantee from '@/commons/Guarantee';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AsicDetails = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.6, // Percentage of element visibility to trigger the animation
  });
  const fadeInStyles = {
    opacity: 1,
    transform: 'translateX(-30px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };
  return (
    <div className="asicDetailContainer">
      <div className="contenedorFotoAsic">
        <img className="asicDetailFoto" src="/asicpng.png" />
        <div className="disclaimer-asicDetail">
          <div> NOTE: </div>
          <span>
            {' '}
            ASIC hosting is a flat fee with a one time non-refundable deposit of
            $100.00 which is required per unit prior to taking delivery.
          </span>
          <span>
            {' '}
            If you purchase ASIC's through Terra Hosting, we waive our
            commission and pass the savings to you making our prices very
            competitive. If you wish to purchase ASIC's, please email
            co*****@te**********.io or open a ticket on the Terra Discord
            channel.{' '}
          </span>
          <div> DISCLAIMER: </div>
          <span>
            A third party vendor is contracted with Terra Hosting for sales, we
            do not sell any equipment. A one year hosting commitment is required
            when purchasing an ASIC machine(s) at a discounted rate through our
            vendor.{' '}
          </span>
        </div>
      </div>
      <div
        ref={ref}
        style={inView ? fadeInStyles : {}}
        className="info-asic-detail">
        <h3> ASIC Hosting</h3>
        <h1> $ 0.1450 per kWh</h1>
        <span> Monthly Package</span>
        <div className="features-asic-detail">
          <img className="icono-check-detail" alt="" src="/blanco.png" />{' '}
          <h4> 24/7 Support</h4>
        </div>
        <div className="features-asic-detail">
          <img className="icono-check-detail" alt="" src="/blanco.png" />{' '}
          <h4> HiveOn Acces (If applicable)</h4>
        </div>
        <div className="features-asic-detail">
          <img className="icono-check-detail" alt="" src="/blanco.png" />{' '}
          <h4> Overclocking Support Available</h4>
        </div>
        <div className="features-asic-detail">
          <img className="icono-check-detail" alt="" src="/blanco.png" />{' '}
          <h4> Private VLAN</h4>
        </div>
        <div className="features-asic-detail">
          <img className="icono-check-detail" alt="" src="/blanco.png" />{' '}
          <h4> Repair Assistance</h4>
        </div>
        <div className="features-asic-detail">
          <img className="icono-check-detail" alt="" src="/blanco.png" />{' '}
          <h4> 3,500 watt limit per unit</h4>
        </div>
        <button> RESERVE</button>
        <Guarantee/>
      </div>
    </div>
  );
};

export default AsicDetails;

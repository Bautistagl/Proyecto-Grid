import dynamic from "next/dynamic";
import ContactForm from "@/components/index/ContactForm";
import Footer from "@/components/index/Footer";
import Banner from "@/components/landing-AsicHosting/Banner";

import PrimerFaqs from "@/components/landing-AsicHosting/PrimerFaqs";
import CardsAsic from "@/components/landing-AsicHosting/CardsAsic";
import CardsImmersion from "@/commons/CardsImmesrion";
import FaqsImmersion from "@/components/FaqsImmersion";
import { useInView } from "react-intersection-observer";



const DynamicNavbar = dynamic(()=>import("../components/index/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function ImmersionCooling() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.7, // Percentage of element visibility to trigger the animation
  });
  const fadeInStylesLeft = {
    opacity: 1,
    transform: 'translateX(-50px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };
  return (
    <>
    <div className="container-homePrincipal"> 

    <DynamicNavbar/>
    <div className="banner-container">
    <Banner
        producto='Immersion Cooling'
        title='Power up your ASIC mining operations with our immersion cooling solution.'
        subtitle='Our immersion cooling product protects mining equipment from dust buildup, high temperatures, humidity, and oxidation, resulting in increased mining efficiency and extended equipment lifespan. Our Immersion Cooling Hosting service provides a secure and stable environment for your equipment with 24/7 monitoring, redundant power and cooling, and expert support. Contact us to learn more about our immersion cooling product and hosting service.'
      />
       <img 
          ref={ref}
          style={inView ? fadeInStylesLeft : {}}
       src="/imm-cooling.svg" alt="" className="ilustracion-bannerGrande" />
       </div>
       <CardsImmersion/>
       <FaqsImmersion/>
   <ContactForm/>
   <Footer/>
    </div>
 
      
    </>
  )
}

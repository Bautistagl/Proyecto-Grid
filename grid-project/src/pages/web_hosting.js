import dynamic from "next/dynamic";
import ContactForm from "@/components/index/ContactForm";
import Footer from "@/components/index/Footer";
import Banner from "@/components/landing-AsicHosting/Banner";

import PrimerFaqs from "@/components/landing-AsicHosting/PrimerFaqs";
import CardsAsic from "@/components/landing-AsicHosting/CardsAsic";
import CardsHosting from "@/commons/CardsHosting";
import { useInView } from "react-intersection-observer";



const DynamicNavbar = dynamic(()=>import("../components/index/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function WebHosting() {

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
    producto='Web Hosting'
        title='Web hosting worldwide. Deploy everywhere, at any time.'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
       <img 
         ref={ref}
         style={inView ? fadeInStylesLeft : {}}
       src="/ilustracion-webHosting.svg" alt="" className="ilustracion-bannerGrande" />
       </div>
       <CardsHosting/>
       <PrimerFaqs/>
   <ContactForm/>
   <Footer/>
    </div>
 
      
    </>
  )
}

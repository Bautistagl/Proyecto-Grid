import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import dynamic from "next/dynamic";
import Segundo from "@/components/index/Segundo";
import Powered from "@/components/index/Powered";
import Faqs from "@/components/index/Faqs";
import ContactForm from "@/components/index/ContactForm";
import Footer from "@/components/index/Footer";
import FaqsIndex from "@/components/FaqsIndex";
import MenuMobile from "@/components/MenuMobile";
import Banner from "@/components/landing-AsicHosting/Banner";
import { useInView } from "react-intersection-observer";
import CardsHosting from "@/commons/CardsHosting";



const DynamicNavbar = dynamic(()=>import("../components/index/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function Home() {
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
    <div className="container-homePrincipal" > 

    <DynamicNavbar/>
    <div className="banner-container">
    <Banner
        title='Web hosting worldwide. Deploy everywhere, at any time.'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
       <img 
         ref={ref}
         style={inView ? fadeInStylesLeft : {}}
       src="/ilustracion-webHosting.svg" alt="" className="ilustracion-bannerGrande" />
       </div>
       <CardsHosting/>
  
   <Segundo/>
   <Powered/>
   <FaqsIndex/>
   <ContactForm/>
   <Footer/>
    </div>
 
      
    </>
  )
}

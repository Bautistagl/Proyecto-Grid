import dynamic from "next/dynamic";
import ContactForm from "@/components/index/ContactForm";
import Footer from "@/components/index/Footer";
import Banner from "@/components/landing-AsicHosting/Banner";

import CardsHosting from "@/commons/CardsHosting";
import { useInView } from "react-intersection-observer";
import BarChart from "@/components/solutions/BarChart";
import Charts from "@/components/solutions/Charts";
import Migration from "@/components/solutions/Migration";



const DynamicNavbar = dynamic(()=>import("../components/index/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function Solutions() {

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
        title='Seamlessly transition from any cloud provider.'
        subtitle='Grid is designed for businesses that are looking for cost-effective cloud solutions and may not have the budget for super-scale providers. It offers the simplest path to migrate to a decentralized cloud environment.'
      />
       <img 
         ref={ref}
         style={inView ? fadeInStylesLeft : {}}
       src="/ilustracion-webHosting.svg" alt="" className="ilustracion-bannerGrande" />
       </div>
       <CardsHosting/>
     
        <Charts/>
        <Migration/>
   <ContactForm/>
   <Footer/>
    </div>
 
      
    </>
  )
}

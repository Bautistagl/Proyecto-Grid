import dynamic from "next/dynamic";
import ContactForm from "@/components/index/ContactForm";
import Footer from "@/components/index/Footer";
import Banner from "@/components/landing-AsicHosting/Banner";
import CardsAsic from "@/components/landing-AsicHosting/CardsAsic";
import AsicDetails from "@/components/landing-AsicHosting/AsicDetails";
import CardFaqs from "@/commons/CardFaqsRight";
import FaqsAsic from "@/components/landing-AsicHosting/FaqsAsic";



const DynamicNavbar = dynamic(()=>import("../components/index/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function AsicMining() {
  return (
    <>
    <div className="container-homePrincipal"> 

    <DynamicNavbar/>
    <div className="banner-container">
    <Banner/>
       <img src="/ilustracion-asicMining3.svg" alt="" className="ilustracion-bannerChica" />
       </div>
       <CardsAsic/>
       <AsicDetails/>
       <FaqsAsic/>
      
   <ContactForm/>
   <Footer/>
    </div>
 
      
    </>
  )
}

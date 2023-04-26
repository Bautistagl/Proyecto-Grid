import dynamic from "next/dynamic";
import ContactForm from "@/components/index/ContactForm";
import Footer from "@/components/index/Footer";
import Banner from "@/components/landing-AsicHosting/Banner";



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
  
   <ContactForm/>
   <Footer/>
    </div>
 
      
    </>
  )
}

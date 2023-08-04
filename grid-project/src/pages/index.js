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



const DynamicNavbar = dynamic(()=>import("../components/index/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)
const DynamicCarrousel = dynamic(()=>import("../components/index/Carrousel"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function Home() {

  return (
    <>
    <div className="container-homePrincipal" > 

    <DynamicNavbar/>
   <DynamicCarrousel/>
  
   <Segundo
   
   
   />
   <Powered/>
   <FaqsIndex/>
   <ContactForm/>
   <Footer/>
    </div>
 
      
    </>
  )
}

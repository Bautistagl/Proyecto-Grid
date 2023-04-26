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


export default function WebHosting() {
  return (
    <>
    <div className="container-homePrincipal"> 

    <DynamicNavbar/>
    <div className="banner-container">
    <Banner
        title='Web hosting worldwide. Deploy everywhere, at any time.'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
       <img src="/ilustracion-webHosting.svg" alt="" className="ilustracion-bannerGrande" />
       </div>
   <ContactForm/>
   <Footer/>
    </div>
 
      
    </>
  )
}

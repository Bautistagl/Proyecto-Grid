// import dynamic from "next/dynamic";
// import ContactForm from "@/components/index/ContactForm";
// import Footer from "@/components/index/Footer";
// import Banner from "@/components/landing-AsicHosting/Banner";
// import CardsAsic from "@/components/landing-AsicHosting/CardsAsic";
// import AsicDetails from "@/components/landing-AsicHosting/AsicDetails";
// import PrimerFaqs from "@/components/landing-AsicHosting/PrimerFaqs";
// import { useInView } from "react-intersection-observer";



// const DynamicNavbar = dynamic(()=>import("../components/index/Navbar"),
//   {
//     ssr:false,
//     loading: () => <p> Im f</p>
//   }
// )


export default function AsicMining() {
  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Animation triggers only once
  //   threshold: 0.7, // Percentage of element visibility to trigger the animation
  // });
  // const fadeInStylesLeft = {
  //   opacity: 1,
  //   transform: 'translateX(-50px)',
  //   transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  // };
  return (
    <>
    {/* <div className="container-homePrincipal"> 

    <DynamicNavbar/>
    <div className="banner-container">
    <Banner/>
       <img 
         ref={ref}
         style={inView ? fadeInStylesLeft : {}}
       src="/ilustracion-asicMining3.svg" alt="" className="ilustracion-bannerChica" />
       </div>
       <CardsAsic/>
       <AsicDetails/> 
       <PrimerFaqs/>
      
   <ContactForm/>
   <Footer/>
    </div> */}
 
      
    </>
  )
}

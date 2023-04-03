import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Inter } from 'next/font/google'
import dynamic from "next/dynamic";

import Navbar from '@/components/Navbar'
import Carrousel from '@/components/Carrousel'
import Segundo from "@/components/Segundo";
import Powered from "@/components/Powered";
import Faqs from "@/components/Faqs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })
const DynamicNavbar = dynamic(()=>import("../components/Navbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)
const DynamicCarrousel = dynamic(()=>import("../components/Carrousel"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function Home() {
  return (
    <>
    
    <DynamicNavbar/>
   <DynamicCarrousel/>
   <Segundo/>
   <Powered/>
   <Faqs/>
   <ContactForm/>
   <Footer/>
 
      
    </>
  )
}

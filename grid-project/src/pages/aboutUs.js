import FirstPart from "@/components/aboutUs/FirstPart"
import Footer from "@/components/index/Footer"
import dynamic from "next/dynamic"

export default function AsicMining() {

    const DynamicNavbar = dynamic(()=>import("../components/index/Navbar"),
    {
      ssr:false,
      loading: () => <p> Im f</p>
    }
  )

    return (

        <>
        <DynamicNavbar/>
        <FirstPart/>
        <Footer/>
        
        </>

    )


}
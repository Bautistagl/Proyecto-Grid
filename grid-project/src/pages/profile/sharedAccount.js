

import SharedInfo from "@/components/logged/sharedAccount/SharedInfo";
import { useState } from "react";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function SharedAccount() {

  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
 }
    return (
      <div className="container-Shared" >
      <div className= "logged-home-component" >
    
      <div style={{display:'flex',flexDirection:'row'}}>

         <DynamicNavbar/>
         <SharedInfo/>
      </div>

         </div>
      </div>
    )
  }
  
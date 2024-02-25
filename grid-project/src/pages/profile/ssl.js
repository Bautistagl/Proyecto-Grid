import InfoPersonal from "@/components/logged/personal/InfoPersonal"
import dynamic from "next/dynamic";
import { useState } from "react";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedSSL() {
  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
 }
    return (
      <div className="logged-home-component" >
          <div style={{display:'flex',flexDirection:'row'}}>

         <DynamicNavbar/>
         <InfoPersonal/>
          </div>
      
         </div>
      
    )
  }
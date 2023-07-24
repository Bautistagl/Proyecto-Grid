

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
      <div className={ visible ? "logged-home-component" : "logged-home-component-sin-sidebar"}>
      {!visible ? <button 
        onClick={()=>{toggleSideBar()}}
        className="boton-sidebar-mostrar"><img className="icon-mostrar" alt="" src='/abrir-side.png'/></button> :
         <>
          <div className="boton-sidebar-ocultar" onClick={()=>{ toggleSideBar()}}> <img className="icon-ocultar" alt="" src='/equal2.png'/> </div>
         <DynamicNavbar/>
        </>  }
      
      <SharedInfo/>
      
         </div>
      </div>
    )
  }
  
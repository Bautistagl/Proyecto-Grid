import InfoSecurity from '@/components/logged/securityy/InfoSecurity'
import React from 'react'
import { useState } from "react";
import dynamic from "next/dynamic";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

const security = () => {
  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
 }
  return (
    <>
   <div className="container-Security" >
      <div className="container-sideNavbar-infoSecurity">
      {!visible ? <button 
        onClick={()=>{toggleSideBar()}}
        className="boton-sidebar-mostrar"><img className="icon-mostrar" alt="" src='/abrir-side.png'/></button> :
         <>
          <div className="boton-sidebar-ocultar" onClick={()=>{ toggleSideBar()}}> <img className="icon-ocultar" alt="" src='/hide.png'/> </div>
         <DynamicNavbar/>
        </>  }
      <InfoSecurity/>
         </div>
      </div>
    </>
  )
}

export default security
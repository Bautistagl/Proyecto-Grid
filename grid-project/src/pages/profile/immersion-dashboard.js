
import SideNavbar from "@/commons/SideNavbar";
import ImmersionBuy from "@/components/logged/immersionDashboard/ImmersionBuy";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function Personal() {
  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
 }
    return (
      <div className={ visible ? "logged-home-component" : "logged-home-component-sin-sidebar"}>
        {!visible ? <button 
        onClick={()=>{toggleSideBar()}}
        className="boton-sidebar-mostrar"><img className="icon-mostrar" alt="" src='/abrir-side.png'/></button> :
         <>
          <div className="boton-sidebar-ocultar" onClick={()=>{ toggleSideBar()}}> <img className="icon-ocultar" alt="" src='/hide.png'/> </div>
         <DynamicNavbar/>
        </>  }
      <ImmersionBuy/>
      
         </div>
      
    )
  }
  

import MenuNavbar from "@/commons/MenuNavbar";
import HostingWeb from "@/components/cards/HostingWeb";
import dynamic from "next/dynamic";
import { useState } from "react";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedHosting() {
  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
 }
    return (
      <div className="logged-hosting-component">
       {!visible ? <button 
        onClick={()=>{toggleSideBar()}}
        className="boton-sidebar-mostrar"><img className="icon-mostrar" alt="" src='/abrir-side.png'/></button> :
         <>
          <div className="boton-sidebar-ocultar" onClick={()=>{ toggleSideBar()}}> <img className="icon-ocultar" alt="" src='/hide.png'/> </div>
          <DynamicNavbar/>
        </>  }
      <HostingWeb/>
      
      


      </div>
    )
  }
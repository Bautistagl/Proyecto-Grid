import ProjectInfo from '@/commons/ProjectInfo'
import DataDeploys from '@/components/projectsx/DataDeploys'
import EnvironmentScreen from '@/components/projectsx/EnvironmentScreen'
import RedirectScreen from '@/components/projectsx/RedirectScreen'
import dynamic from 'next/dynamic'

import { useState } from 'react'
const DynamicNavbar = dynamic(()=>import("../../../commons/SidebarProject"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function Redirect ()  {


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
          <div className="boton-sidebar-ocultar" onClick={()=>{ toggleSideBar()}}> <img className="icon-ocultar" alt="" src='/equal2.png'/> </div>
         <DynamicNavbar/>
        </> }
          <ProjectInfo/>
          <RedirectScreen/>
        </div>
    )


}
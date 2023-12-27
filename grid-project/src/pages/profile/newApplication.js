import dynamic from 'next/dynamic'
import NewApplicationj from '@/components/NewApplication'
import { useState } from 'react'
import Paginacion from '@/commons/Paginacion'
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function NewApplication ()  {


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
        <div style={{opacity:'0'}}>.</div>
        <Paginacion anterior="Services" links="/profile" titulo="Deploy new app" />
        <NewApplicationj/>
        </div>
    )


}
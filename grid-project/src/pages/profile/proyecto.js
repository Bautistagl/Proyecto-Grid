

import Proyecto from '@/components/logged/Proyecto'
import dynamic from 'next/dynamic'

import React, { useState } from 'react'
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function Proyecto2 ()  {

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
      <Proyecto/>
 
         </div>
      </div>
    </>
  )
}


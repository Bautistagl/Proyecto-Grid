import dynamic from 'next/dynamic'
import NewApplicationj from '@/components/NewApplication'
import { useState } from 'react'
import Paginacion from '@/commons/Paginacion'
import Image from 'next/image'
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function Integration ()  {


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
        <Paginacion anterior="Settings" links="/profile" titulo="Integrations" />
        <div className='integration-container'>
        <Image alt='' src='/dockerf.png' width={100} height={40}/>
       
        </div>
        <div className='integration-container'>
        <Image alt='' src='/slack.png' width={100} height={40}/>
        
        </div>
        <div  className='integration-container'>
        <Image alt='' src='/githubL.png' width={100} height={50}/>
        
        </div>
        </div>
    )


}
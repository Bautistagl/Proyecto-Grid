
import Paginacion from "@/commons/Paginacion";
import Cards from "@/components/logged/homeLogged/Cards";
import Home from "@/components/logged/homeLogged/Home";
import dynamic from "next/dynamic";
import { useState } from 'react';
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedLogin() {
  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
 }

    return (
      <div className={ visible ? "logged-home-component" : "logged-home-component-sin-sidebar"}>
        {!visible ? <button 
        onClick={()=>{toggleSideBar()}}
        className="boton-sidebar-mostrar"> Mostrar</button> : ''}
        <div className={visible ? '' : 'no-visible'}>
      <DynamicNavbar/>
           </div>
      <button className="boton-sidebar-ocultar" onClick={()=>{ toggleSideBar()}}> ocultar </button>
      {/* <Home/> */}
      <Paginacion  anterior="Home" links="/profile"  />
      <input placeholder="Search..." className="input-proyecto" />
      <button className='button-proyecto'> Add New... </button>
      <div className={ visible ? "logged-home-cards" : 'logged-home-cards-sin-sidebar'}  > 
      <Cards
      titulo='primer-proyecto-grid'
      link='primer-proyecto-grid.grid.app'
      push='esto es lo que diria el push'
      ultimaFecha='10d ago via Github'
      icono='/iconoGrid3.png'
      />
       <Cards
      titulo='segundo-proyecto-grid'
      link='segundo-proyecto-grid.grid.app'
      push='Main features'
      ultimaFecha='10d ago via Github'
      icono='/iconoGrid3.png'
      />
       <Cards
      titulo='tercer-proyecto-grid'
      link='tercer-proyecto-grid.grid.app'
      push='Login and register'
      ultimaFecha='10d ago via Github'
      icono='/iconoGrid3.png'
      />
       <Cards
      titulo='cuarto-proyecto-grid'
      link='cuarto-proyecto-grid.grid.app'
      push='Home and landing'
      ultimaFecha='10d ago via Github'
      icono='/iconoGrid3.png'
      />
       <Cards
      titulo='quinto-proyecto-grid'
      link='quinto-proyecto-grid.grid.app'
      push='Mobile view'
      ultimaFecha='10d ago via Github'
      icono='/iconoGrid3.png'
      />
       <Cards
      titulo='sexto-proyecto-grid'
      link='sexto-proyecto-grid.grid.app'
      push='esto es lo que diria el push'
      ultimaFecha='10d ago via Github'
      icono='/iconoGrid3.png'
      />
      </div>
      </div>
    )
  }

import Paginacion from "@/commons/Paginacion";
import BarChart from "@/components/BarChart";
import Cards from "@/components/logged/homeLogged/Cards";
import Home from "@/components/logged/homeLogged/Home";
import dynamic from "next/dynamic";
import { useState } from 'react';
import {UserData} from '../../Data'
import {LineData} from '../../DataLine'
import LineChart from "@/components/LineChart";
import Charts from "@/components/Charts";
const DynamicNavbar = dynamic(()=>import("../../commons/SideNavbar"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)

export default function LoggedLogin() {

  const [userData, SetUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label:'Minado BTC',
      data: UserData.map((data) => data.btcGain),
      backgroundColor: ['#36B079'],
      borderColor: 'white'

    }]
  })
  const [userData2, SetUserData2] = useState({
    labels: LineData.map((data) => data.year),
    datasets: [{
      label:'Valor total cuenta BTC',
      data: LineData.map((data) => data.btcGain),
      backgroundColor: ['#36B079'],
      borderColor: 'white'

    }]
  })
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
      return setSelected(i);
    };
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
        </>  }
        <div>s</div>
      <Paginacion  anterior="Home" links="/profile"  />
      <div className="contenedor-titulos-hosting-click-shared">
        <span
          className={`spanHosting-clickeable-shared${selected === 0 ? 'focus' : ''}`}
          onClick={() => toggle(0)}>
            Asic Hosting
        </span>
        <span
          className={`spanHosting-clickeable-shared${selected === 1 ? 'focus' : ''}`}
          onClick={() => toggle(1)}>
          {' '}
          Web Hosting
        </span>
      </div>
      { selected === 0 ? 
      <>
        <Charts/>
      </>
      : 
      <div> 

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
         <div style={{opacity:'0'}}>.</div>
         </div>
      </div>

      }
   

      </div>
    )
  }
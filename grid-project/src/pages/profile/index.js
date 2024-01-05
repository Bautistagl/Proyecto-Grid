import Paginacion from '@/commons/Paginacion';
import BarChart from '@/components/solutions/BarChart';
import Cards from '@/components/logged/homeLogged/Cards';
import Home from '@/components/logged/homeLogged/Home';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { UserData } from '../../Data';
import { LineData } from '../../DataLine';
import LineChart from '@/components/LineChart';
import Charts from '@/components/solutions/Charts';
import Link from 'next/link';
import BeforeBuy from '@/components/BeforeBuy';
import Project from '@/commons/Project';
import ModalContact from '@/commons/ModalContact';
const DynamicNavbar = dynamic(() => import('../../commons/SideNavbar'), {
  ssr: false,
  loading: () => <p> Im f</p>,
});

export default function LoggedLogin() {
  // const [userData, SetUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: 'Minado BTC',
  //       data: UserData.map((data) => data.btcGain),
  //       backgroundColor: ['#36B079'],
  //       borderColor: 'white',
  //     },
  //   ],
  // });
  // const [userData2, SetUserData2] = useState({
  //   labels: LineData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: 'Valor total cuenta BTC',
  //       data: LineData.map((data) => data.btcGain),
  //       backgroundColor: ['#36B079'],
  //       borderColor: 'white',
  //     },
  //   ],
  // });
  const [abierto,setAbierto] = useState(false)
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    return setSelected(i);
  };
  const [visible, setVisible] = useState(true);
  const toggleSideBar = () => {
    return setVisible(!visible);
  };

  return (
    <div >
      <div className={abierto ? 'blureado' : ''}>

    <div
      className={
        visible ? 'logged-home-component' : 'logged-home-component-sin-sidebar'
      }>
      {!visible ? (
        <button
          onClick={() => {
            toggleSideBar();
          }}
          className="boton-sidebar-mostrar">
          <img className="icon-mostrar" alt="" src="/abrir-side.png" />
        </button>
      ) : (
        <>
          <div
            className="boton-sidebar-ocultar"
            onClick={() => {
              toggleSideBar();
            }}>
            {' '}
            <img className="icon-ocultar" alt="" src="/equal2.png" />{' '}
          </div>
          <DynamicNavbar abierto={abierto} setAbierto={setAbierto} />
        </>
      )}
      <div>s</div>
      <Paginacion anterior="Home" links="/profile" />

      <div>
        <div className="contenedor-flex-only2">
          <input placeholder="Search..." className="input-proyecto" />
          <Link href="/profile/newApplication">
            <button className="new-button"> + </button>
          </Link>
        </div>
        <button className="button-proyecto">
          {' '}
          <Link href="/profile/newApplication"> Add New... </Link>{' '}
        </button>
        <div
          className={
            visible ? 'logged-home-cards' : 'logged-home-cards-sin-sidebar'
          }>
          <div style={{justifyContent:'flex-end'}} className="contenedor-titulos-hosting-click-shared2">
            <span
            
              className={`spanHosting-clickeable-shared${
                selected === 0 ? 'focus' : ''
              }`}
              onClick={() => toggle(0)}>
              Active
            </span>
            <span
             
              className={`spanHosting-clickeable-shared${
                selected === 1 ? 'focus' : ''
              }`}
              onClick={() => toggle(1)}>
              {' '}
              Suspended
            </span>
            <span
             
              className={`spanHosting-clickeable-shared${
                selected === 2 ? 'focus' : ''
              }`}
              onClick={() => toggle(2)}>
              {' '}
              All
            </span>
          </div>
          <div style={{marginTop:'60px'}} className="titulos-home">
            <span style={{ marginRight: '5vw', letterSpacing: '2px' }}>
              NAME
            </span>

            <span style={{ marginRight: '8vw', letterSpacing: '2px' }}>
              STATUS
            </span>

            <span style={{ letterSpacing: '2px' }}>TYPE</span>
            <span style={{ letterSpacing: '2px' }}>RUNTIME</span>
            <span style={{ letterSpacing: '2px' }}>REGION</span>
            <span style={{ letterSpacing: '2px' }}>LAST DEPLOYED</span>
          </div>
          <Project />
          <Project />
          <Project />
          <div style={{ opacity: '0' }}>.</div>
        </div>
      </div>
    </div>
      </div>

      {abierto ? <ModalContact abierto={abierto} setAbierto={setAbierto} /> : ''}
    </div>
  );
}

{
  /* <BeforeBuy/> */
}
{
  /* <Cards
  titulo='primer-proyecto-grid'
  link='primer-proyecto-grid.grid.app'
  push='esto es lo que diria el push'
  ultimaFecha='10d ago via Github'
  
  />
  <Cards
  titulo='segundo-proyecto-grid'
  link='segundo-proyecto-grid.grid.app'
  push='Main features'
  ultimaFecha='10d ago via Github'
  
  />
   <Cards
  titulo='tercer-proyecto-grid'
  link='tercer-proyecto-grid.grid.app'
  push='Login and register'
  ultimaFecha='10d ago via Github'
  />
   <Cards
  titulo='cuarto-proyecto-grid'
  link='cuarto-proyecto-grid.grid.app'
  push='Home and landing'
  ultimaFecha='10d ago via Github'
  />
   <Cards
  titulo='quinto-proyecto-grid'
  link='quinto-proyecto-grid.grid.app'
  push='Mobile view'
  ultimaFecha='10d ago via Github'
  />
   <Cards
  titulo='sexto-proyecto-grid'
  link='sexto-proyecto-grid.grid.app'
  push='esto es lo que diria el push'
  ultimaFecha='10d ago via Github'
  /> */
}

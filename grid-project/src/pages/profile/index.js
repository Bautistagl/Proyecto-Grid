import Paginacion from '@/commons/Paginacion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Project from '@/commons/Project';
import ModalContact from '@/commons/ModalContact';
import ComponentCard from '@/commons/ComponentCard';
const DynamicNavbar = dynamic(() => import('../../commons/SideNavbar'), {
  ssr: false,
  loading: () => <p> Im f</p>,
});

export default function LoggedLogin() {
  const [abierto, setAbierto] = useState(false);
  const [selected, setSelected] = useState(0);
  const [loginPhrase, setLoginPhrase] = useState('');

  useEffect(() => {
    // Recuperar el valor de loginPhrase de localStorage
    const storedData = localStorage.getItem('postData');

    if (storedData) {
      const postData = JSON.parse(storedData);
      // Actualizar el estado con el valor de loginPhrase
      setLoginPhrase(postData.loginPhrase);
    }
  }, []);

  const toggle = (i) => {
    return setSelected(i);
  };
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <div className={abierto ? 'blureado' : ''}>
        <div className="logged-home-component">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <DynamicNavbar abierto={abierto} setAbierto={setAbierto} />
            <div style={{width:'75%',marginLeft:'auto',marginRight:'auto'}} >
              <Paginacion anterior="Home" links="/profile" />
                  <div className='titulos-dashboard'>
                    <h2> My components </h2>
                    <button> <Link href='/profile/newApplication'> + New component</Link> </button>
                    
                    

                  </div>
                  <div className='grid-components'>
                   <ComponentCard/>
                   <ComponentCard/>
                  </div>




              
            </div>
          </div>
        </div>
      </div>

      {abierto ? (
        <ModalContact abierto={abierto} setAbierto={setAbierto} />
      ) : (
        ''
      )}
    </div>
  );
}




   {/* <div className="contenedor-flex-only2">
                <input placeholder="Search..." className="input-proyecto" />
                <Link href="/profile/newApplication">
                  <button className="new-button"> + </button>
                </Link>
                <span style={{ color: 'white' }}> {loginPhrase} </span>
              </div> */}

              {/* <div
                className={
                  visible
                    ? 'logged-home-cards'
                    : 'logged-home-cards-sin-sidebar'
                }>
                <div
                  style={{width:'100%',marginTop:'50px',marginBottom:"-20px"}}
                  className="contenedor-titulos-hosting-click-shared2">
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
                <div style={{ marginTop: '60px' }} className="titulos-home">
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
              </div> */}
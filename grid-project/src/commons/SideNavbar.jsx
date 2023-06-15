import Link from 'next/link';
import React, { useState } from 'react';


const SideNavbar = () => {

  const[visible, setVisible] = useState(true)
  const [selected, setSelected] = useState(false);

  const toggleSideBar = () => {
     return setVisible(!visible)
  }

  const toggle = () => {
    
    if(selected === false) {
      
      return setSelected(true)
    }
    setSelected(false)
  }
  return (
    <>
    <nav className={ visible ? 'sideNavbar' : 'sideNavbar-noVisible'}>
   
      <ul className='sideNavbar-ul'>
        <Link href="/">
      <img className='icono-sideBar-grid' src='/gridLogo1.png'/>
        </Link>
      <Link href="/profile">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar2' src='/homeDark.png'/>  Home</li>
        </Link>
        <li className='titulo-servicios-sidenavbar'> SERVICES </li>
        <Link href="/profile/hosting">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Hosting</li>
        </Link>
        <Link href="/profile/ssl">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/> Email</li>
        </Link>
        <Link href="/profile/ssl">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Dominios</li>
        </Link>
        <Link href="/profile/immersion-dashboard">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Immersion Cooling</li>
        </Link>
       
        <li className='sideNavbar-li' onClick={()=> toggle()}><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Asic Hosting <span> <img className='icon-sideNavbarAsicHosting' src='/abierto.png' alt=''/> </span></li>
        
        <div className={`dropdown-asicHosting ${selected === true ? 'selected' : ''}  `} > 

        <ul >
        <Link href="/profile/asicHosting">  
          <li className='li-asicHosting'> <img className='icon-sideNavbarAsicHosting' src='/serversDark.png' alt=''/> My Miners </li>
          </Link>
          <li className='li-asicHosting'> <img className='icon-sideNavbarAsicHosting' src='/invoiceDark.png' alt=''/>  Billing</li>  
         </ul>
        </div>
        <Link href="/profile/billing">  
        <li  className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Billing</li>
        </Link>
        <li className='titulo-servicios-sidenavbar'> SETTINGS </li>
       


        <Link href="/profile/ssl">  
        <li  className='sideNavbar-li'><img className='icon-sideNavbar2' src='/userDark.png'/>  Account settings</li>
        </Link>
        <Link href="/profile/security"> 
         <li className='sideNavbar-li'> <img className='icon-sideNavbar2' src='/padlockDark.png'/> Security</li>
        </Link>
        <Link href="/profile/sharedAccount"> 
        <li className='sideNavbar-li'> <img className='icon-sideNavbar2' src='/groupDark.png'/> Shared Account</li>
        </Link>
        
      </ul>
    </nav>
    </>
  );
};

export default SideNavbar;
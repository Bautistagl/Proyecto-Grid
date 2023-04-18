import Link from 'next/link';
import React, { useState } from 'react';


const SideNavbar = () => {

  const [selected, setSelected] = useState(false);

  const toggle = () => {
    console.log(selected)
    if(selected === false) {
      
      return setSelected(true)
    }
    setSelected(false)
  }
  return (
    <nav className='sideNavbar'>
      <ul className='sideNavbar-ul'>
        <Link href="/">
      <img className='icono-sideBar-grid' src='/iconoGrid2.png'/>
        </Link>
      <Link href="/profile">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar2' src='/home.png'/>  Home</li>
        </Link>
        <li className='titulo-servicios-sidenavbar'> SERVICES </li>
        <Link href="/profile/hosting">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Hosting</li>
        </Link>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/> Email</li>
        </Link>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Dominios</li>
        </Link>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  VPN</li>
        </Link>
       
        <li className='sideNavbar-li' onClick={()=> toggle()}><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Asic Hosting <span> <img className='icon-sideNavbarAsicHosting' src='/abierto.png' alt=''/> </span></li>
        
        <div className={`dropdown-asicHosting ${selected === true ? 'selected' : ''}  `} > 

        <ul >
        <Link href="/profile/asicHosting">  
          <li className='li-asicHosting'> <img className='icon-sideNavbarAsicHosting' src='/servers.png' alt=''/> My Miners </li>
          </Link>
          <li className='li-asicHosting'> <img className='icon-sideNavbarAsicHosting' src='/invoice.png' alt=''/>  Billing</li>  
         </ul>
        </div>
        <Link href="/profile/personal-information">  
        <li  className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Billing</li>
        </Link>
        <li className='titulo-servicios-sidenavbar'> SETTINGS </li>
       


        <Link href="/profile/personal-information">  
        <li  className='sideNavbar-li'><img className='icon-sideNavbar2' src='/user (2).png'/>  Account settings</li>
        </Link>
        <Link href="/profile/security"> 
         <li className='sideNavbar-li'> <img className='icon-sideNavbar2' src='/padlock.png'/> Security</li>
        </Link>
        <Link href="sharedAccount"> 
        <li className='sideNavbar-li'> <img className='icon-sideNavbar2' src='/group.png'/> Shared Account</li>
        </Link>
        
      </ul>
    </nav>
  );
};

export default SideNavbar;
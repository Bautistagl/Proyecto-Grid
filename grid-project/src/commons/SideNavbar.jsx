import Link from 'next/link';
import React from 'react';

const SideNavbar = () => {
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
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/IconoGrid3.png'/>  Asic Hosting</li>
        </Link>
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
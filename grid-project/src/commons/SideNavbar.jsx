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
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/home.png'/>  Home</li>
        </Link>
        <li className='titulo-servicios-sidenavbar'> SERVICES </li>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/google.png'/>  Hosting</li>
        </Link>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/google.png'/> Email</li>
        </Link>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/google.png'/>  Dominios</li>
        </Link>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/google.png'/>  VPN</li>
        </Link>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/google.png'/>  Asic Hosting</li>
        </Link>
        <Link href="/profile/personal-information">  
        <li  className='sideNavbar-li'><img className='icon-sideNavbar' src='/google.png'/>  Biling</li>
        </Link>
        <li className='titulo-servicios-sidenavbar'> SETTINGS </li>
       


        <Link href="/profile/personal-information">  
        <li  className='sideNavbar-li'><img className='icon-sideNavbar' src='/user (2).png'/>  Account settings</li>
        </Link>
        <Link href="/profile/security"> 
         <li className='sideNavbar-li'> <img className='icon-sideNavbar' src='/padlock.png'/> Security</li>
        </Link>
        <Link href="sharedAccount"> 
        <li className='sideNavbar-li'> <img className='icon-sideNavbar' src='/group.png'/> Shared Account</li>
        </Link>
        
      </ul>
    </nav>
  );
};

export default SideNavbar;
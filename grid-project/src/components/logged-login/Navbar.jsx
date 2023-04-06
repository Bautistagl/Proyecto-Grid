import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbarLogged'>
      <div >
        <Link href="/">
        <img className="logo-navbarLogged" src="/gridLogo1.png" alt="Logo" />
        </Link>
      </div>
      <ul>
        <li className='li-logged'> Home </li>
        <li className='li-logged'> Hosting </li>
        <li className='li-logged'> Emails </li>
        <li className='li-logged'> Domains </li>
        <li className='li-logged'> VPS Servers </li>
        <li className='li-logged'> SSL </li>
        <li className='li-logged'> Facturacion </li>
      </ul>
      <div className='user-logged-navbar'>
        <Link href="/logged/personal"> 
        <img className='icono-user-logged' src='/user (1).png'/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

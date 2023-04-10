import Link from 'next/link';
import React from 'react';

const SideNavbar = () => {
  return (
    <nav className='sideNavbar'>
      <ul className='sideNavbar-ul'>
        <Link href="/profile/personal-information">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/user (2).png'/>  Account settings</li>
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
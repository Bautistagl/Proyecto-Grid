import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbarLogin'>
      <div >
        <Link href="/">
        
        <img className="logo-navbarLogin" src="/gridInvisible.png" alt="Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import SidebarMobile from '@/components/SidebarMobile';
import Link from 'next/link';
import React, { useState } from 'react';


const SideNavbar = () => {

  const[visible, setVisible] = useState(true)
  const [selected, setSelected] = useState(false);
  const [menu,setMenu] = useState(false)

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
      <img className='icono-sideBar-grid' src='/gridCloud.svg'/>
        </Link>
      <Link href="/profile">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar2' src='/homeDark.png'/>  Home</li>
        </Link>
        <li className='titulo-servicios-sidenavbar'> SERVICES </li>
        <Link href="/profile/hosting">  
        <li className='sideNavbar-li'><img className='icon-sideNavbar' src='/iconDeploy.png'/>  Deploy</li>
        </Link>
        
        <div className={`dropdown-asicHosting ${selected === true ? 'selected' : ''}  `} > 

        <ul >
        <Link href="/profile/asicHosting">  
          <li className='li-asicHosting'> <img className='icon-sideNavbarAsicHosting' src='/serversDark.png' alt=''/> My Miners </li>
          </Link>
          <li className='li-asicHosting'> <img className='icon-sideNavbarAsicHosting' src='/invoiceDark.png' alt=''/>  Billing</li>  
         </ul>
        </div>
        <Link href="/profile/billing">  
        <li  className='sideNavbar-li'><img className='icon-sideNavbar' src='/iconBill.png'/>  Billing</li>
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
        
      <button className='logout-sidebar'> Logout </button>
      </ul>
          <img alt='' src='/gridCloud.svg' className='sidebar-grid' />

          
          {menu === false ? (
            <img onClick={()=>setMenu(true)} className="sidebar-menu-mobile" src={'/menu.png'} />
          ) : (
            <img onClick={()=>setMenu(false)} className="sidebar-menu-mobile" src={'/menuCerrado.png'} />
          )}
    </nav>
           {menu ?  <SidebarMobile/> : ''}
    </>
  );
};

export default SideNavbar;
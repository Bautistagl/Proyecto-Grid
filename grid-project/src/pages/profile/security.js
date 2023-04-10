import Navbar from '@/commons/Navbar'
import SideNavbar from '@/commons/SideNavbar'
import InfoSecurity from '@/components/logged/securityy/InfoSecurity'
import React from 'react'

const security = () => {
  return (
    <>
   <div className="container-Security" >
      <div className="container-sideNavbar-infoSecurity">
      <SideNavbar/>
      <InfoSecurity/>
         </div>
      </div>
    </>
  )
}

export default security
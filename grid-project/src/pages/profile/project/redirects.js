import ProjectInfo from '@/commons/ProjectInfo'
import RedirectScreen from '@/components/projectsx/RedirectScreen'
import dynamic from 'next/dynamic'

import { useState } from 'react'
const DynamicNavbar = dynamic(()=>import("../../../commons/SidebarProject"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function Redirect ()  {


  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
  }

    return (
        <div className= "logged-home-component" >
     
         <DynamicNavbar/>
      
          <ProjectInfo/>
          <RedirectScreen/>
        </div>
    )


}
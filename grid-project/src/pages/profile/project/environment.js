import ProjectInfo from '@/commons/ProjectInfo'
import DataDeploys from '@/components/projectsx/DataDeploys'
import EnvironmentScreen from '@/components/projectsx/EnvironmentScreen'
import dynamic from 'next/dynamic'

import { useState } from 'react'
const DynamicNavbar = dynamic(()=>import("../../../commons/SidebarProject"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function Environment ()  {


  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
  }

    return (
        <div className="logged-home-component" >
      
         <DynamicNavbar/>
   
          <ProjectInfo/>
          <EnvironmentScreen/>
        </div>
    )


}
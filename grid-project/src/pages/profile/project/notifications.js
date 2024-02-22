import DeployedNavbar from '@/commons/DeployedNavbar'
import ProjectInfo from '@/commons/ProjectInfo'
import DataDeploys from '@/components/projectsx/DataDeploys'
import EnvironmentScreen from '@/components/projectsx/EnvironmentScreen'
import NotificationScreen from '@/components/projectsx/NotificationScreen'
import dynamic from 'next/dynamic'

import { useState } from 'react'
const DynamicNavbar = dynamic(() => import('../../../commons/SideNavbar'), {
    ssr: false,
    loading: () => <p> Im f</p>,
  });


export default function Notifications ()  {


  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
  }

    return (
        <div className="logged-home-component" >
                   <div style={{ display: 'flex', flexDirection: 'row' }}>
         <DynamicNavbar/>
            <div>
          <ProjectInfo/>
          <DeployedNavbar/>

          <NotificationScreen/>
            </div>
                   </div>
      
   
        </div>
    )


}
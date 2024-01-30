import ProjectInfo from '@/commons/ProjectInfo'
import DataDeploys from '@/components/projectsx/DataDeploys'
import dynamic from 'next/dynamic'

import { useState } from 'react'
const DynamicNavbar = dynamic(()=>import("../../../commons/SidebarProject"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function Project ()  {


  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
  }

    return (
        <div className="logged-home-component" >

         <DynamicNavbar/>
       
          <ProjectInfo/>
          <div className='dataDeployContainer'>

          <DataDeploys 
          foto={'/cloudRed.png'}
          estado={'Deploy failed for c7d07aa: adsa'}
          detalle={'Exited with status 1 while building your code. Check your deploy logs for more information.'}
          fecha={'November 17, 2023 at 1:08 PM'}
          />
          <DataDeploys 
          foto={'/cloud.png'}
          estado={'Deploy failed for c7d07aa: adsa'}
          detalle={'Exited with status 1 while building your code. Check your deploy logs for more information.'}
          fecha={'November 17, 2023 at 1:08 PM'}
          />
          <DataDeploys 
          foto={'/cloudGreen.png'}
          estado={'Deploy failed for c7d07aa: adsa'}
          detalle={'Exited with status 1 while building your code. Check your deploy logs for more information.'}
          fecha={'November 17, 2023 at 1:08 PM'}
          />
          <DataDeploys 
          foto={'/cloudRed.png'}
          estado={'Deploy failed for c7d07aa: adsa'}
          detalle={'Exited with status 1 while building your code. Check your deploy logs for more information.'}
          fecha={'November 17, 2023 at 1:08 PM'}
          />
          </div>
        </div>
    )


}
import ProjectInfo from '@/commons/ProjectInfo'
import HeadersScreen from '@/components/projectsx/HeadersScreen'
import dynamic from 'next/dynamic'

import { useState } from 'react'
const DynamicNavbar = dynamic(()=>import("../../../commons/SidebarProject"),
  {
    ssr:false,
    loading: () => <p> Im f</p>
  }
)


export default function Headers ()  {


  const[visible, setVisible] = useState(true)
  const toggleSideBar = () => {
    return setVisible(!visible)
  }

    return (
        <div className="logged-home-component">
  
         <DynamicNavbar/>
       
          <ProjectInfo/>
          <HeadersScreen/>
          
        </div>
    )


}
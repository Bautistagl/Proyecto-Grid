import Image from 'next/image'
import React, { useState } from 'react'
import { WebComponent } from './WebComponent'
import { DataComponent } from './DataComponent'
import ComponentSelector from './ComponentSelector'

export const NewServices = () => {
  const [option,setOption] = useState('')
  const [database,setDatabase] = useState('')
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    return setSelected(i);
  };
  const handleSelectChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <>
   
    <div className='newServ-container'>

            <div  className="card-newApp2">
            <div className='icono-titulo'>

          
            <h2 style={{marginTop:'0px'}} > Components </h2>
           
            </div>
            <ComponentSelector/>
           


</div>
    </div>
  
    
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    </>
  )
}


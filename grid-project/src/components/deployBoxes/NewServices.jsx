import Image from 'next/image'
import React, { useState } from 'react'
import { WebComponent } from './WebComponent'
import { DataComponent } from './DataComponent'
import ComponentSelector from './ComponentSelector'

export const NewServices = ({onNextStep}) => {
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
   <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={25} height={25} src='/dot.png'/>
    <div className='newServ-container'>

            <div  className="card-newApp2">
            <div className='icono-titulo'>

          
            <h3 style={{marginTop:'0px'}} > Components </h3>
           
            </div>
            <div  className="card-newApp3">

            <ComponentSelector/>
            </div>
           
            <button className='boton-continue' onClick={()=>onNextStep()}>Continue</button>

</div>
    </div>
  
    
    
    </>
  )
}


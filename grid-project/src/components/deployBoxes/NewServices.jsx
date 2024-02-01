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

          
            <span  className="span-newApp"> + Add a new component </span>
            </div>
            <ComponentSelector/>
            {/* <label  >
              {' '}
              Select a service type:{' '}
            </label>
            <select onChange={handleSelectChange} value={option}>
            <option value='web'>Web</option>
            <option value='application'>Cronjob</option>
            <option value='databases'>Databases</option>
            </select>
              {option == 'databases' ? 
              <div className='buttons-newComp'>
              <div className={database === 'sql' ? 'data-selected' : '' } onClick={()=>setDatabase('sql')}> SQL</div>
              <div  className={database === 'mongodb' ? 'data-selected' : '' } onClick={()=>setDatabase('mongodb')}> MongoDB</div>
              <div  className={database === 'mysql' ? 'data-selected' : '' }onClick={()=>setDatabase('mysql')}> MySQL</div>

              </div> : ''}
            <label  > Name this service</label>
            <input  placeholder='Ex: my-service' />
            <div className="contenedor-titulos-hosting-click-shared2">
            <span
              style={{ marginLeft: '42px' }}
              className={`spanHosting-clickeable-shared${
                selected === 0 ? 'focus' : ''
              }`}
              onClick={() => toggle(0)}>
              General
            </span>
            <span
              className={`spanHosting-clickeable-shared${
                selected === 1 ? 'focus' : ''
              }`}
              onClick={() => toggle(1)}>
              {' '}
              Resources
            </span>
            <span
              className={`spanHosting-clickeable-shared${
                selected === 2 ? 'focus' : ''
              }`}
              onClick={() => toggle(2)}>
              {' '}
              Advanced
            </span>
          </div>
            <button> + </button>
           */}
          
    {/* <div style={{display:'flex',flexDirection:'column'}}>

    <DataComponent />
    <WebComponent/>
    </div> */}


</div>
    </div>
  
    
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    </>
  )
}


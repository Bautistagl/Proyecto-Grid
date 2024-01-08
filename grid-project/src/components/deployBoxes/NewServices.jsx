import Image from 'next/image'
import React, { useState } from 'react'
import { WebComponent } from './WebComponent'
import { DataComponent } from './DataComponent'

export const NewServices = () => {
  const [option,setOption] = useState('')
  const [database,setDatabase] = useState('')
  
  const handleSelectChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <>
    <div style={{display:'flex'}}>
    <div className='newServ-container'>

            <div style={{ marginLeft: '30px',height:'40vh' }} className="card-newApp2">
            <div className='icono-titulo'>

          
            <span  className="span-newApp"> + Add a new component </span>
            </div>
            <label  >
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
            <label  > Name this component</label>
            <input  placeholder='Ex: my-service' />
            <button> + </button>
          </div>
          
    <div style={{display:'flex',flexDirection:'column'}}>

    <DataComponent />
    <WebComponent/>
    </div>



    </div>
  
    </div>
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    </>
  )
}


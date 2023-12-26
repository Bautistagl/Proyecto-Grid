import Image from 'next/image'
import React from 'react'

export const NewServices = () => {
  return (
    <>
    <div className='newServ-container'>
            <div style={{ marginLeft: '30px' }} className="card-newApp2">
            <div className='icono-titulo'>

          
            <span  className="span-newApp"> + Add a new service </span>
            </div>
            <label  >
              {' '}
              Select a service type:{' '}
            </label>
            <select>
                <option>Web</option>
                <option>Application</option>
                <option>Databases</option>
            </select>

            <label  > Name this service</label>
            <input  placeholder='Ex: my-service' />
            <button> + </button>
          </div>
          
    </div>
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    </>
  )
}


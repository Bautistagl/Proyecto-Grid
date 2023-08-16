import React from 'react'

const ModalNewApp = () => {
  return (
    <div className='modal-newApp'>
        <div className='contenedor-flex2'> 
        <h1> Add a new service </h1>
        <img style={{cursor:'pointer'}} alt='' src='/menuCerrado.png'/>
        </div>
        <span>Select a service type:</span>
        <div className='contenedor-flex2'>
      
        <select>
            <option> Web </option>
            <option> Worker</option>
            <option> Cron Job</option>
        </select>
        </div>
        <span>Name this service:</span>
        <input placeholder='ex:my-service'/>
        <button> + Add service </button>
    </div>
  )
}

export default ModalNewApp
import Image from 'next/image'
import React from 'react'

const EnvironmentScreen = () => {
  return (
    <div>
         <div className='notification-screen'>
            <h3>Environment variables</h3>
            
            <span >Shared among all services. All non-secret variables are also available at build time.</span>
            <div>
              <button> <Image alt='' src='/web.png' height={15} width={15}/>  Add row</button>
              <button> <Image alt='' src='/web.png' height={15} width={15}/> Copy from file</button>
            </div>
        </div>
          <button> Save changes</button>
    </div>
  )
}

export default EnvironmentScreen
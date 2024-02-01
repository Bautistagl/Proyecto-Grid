import Image from 'next/image'
import React from 'react'

const ComponentCard = () => {
  return (
    <div className='ComponentCard'>
        <div className='first'>
            <span>Active</span>
            <span>Deployed</span>
        </div>
        <div className='second'>
            <Image alt='' src='/iconNewApp2.png' height={20} width={20}/>
            <h3> Grid-Mine </h3>
            <Image alt='' src='/next.png' height={30} width={30}/>
        </div>

        <div className='third'>
            <span>Type: <p> Static Site</p> </span>
            <span>Runtime: <p> 100ms</p> </span>
            <span>Region: <p> Europe</p> </span>
        </div>
        <div className='fourth'>
            <span> Last deployed: <p> 4 days ago</p></span>

        </div>

    </div>
  )
}

export default ComponentCard
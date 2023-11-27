import Image from 'next/image'
import React from 'react'

const DataDeploys = ({foto,estado,detalle,fecha}) => {
  return (
    <div style={{display:'flex',borderBottom:'2px solid grey',backgroundColor:'#0c1317'}}  >
        <Image alt='' src={foto} height={25} width={25}/>
        <div className='deployData' >
            <div>{estado}</div>
            <span> {detalle} </span>
            <p> {fecha}</p>

        </div>
    </div>
  )
}

export default DataDeploys
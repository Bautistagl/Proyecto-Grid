import Image from 'next/image'
import React from 'react'

const WhatApp = () => {
  return (
    <>
    <div className='whatApp-container'>
      <div style={{opacity:'0'}}>.</div>
        <h2> What are you looking to deploy? </h2>
        <div style={{margin:'20px auto'}}>
            <button>Application</button>
            <button>Database</button>
        </div>
    </div>
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    </>
  )
}

export default WhatApp
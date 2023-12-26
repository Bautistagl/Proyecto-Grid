import Image from 'next/image'
import React from 'react'

const NameBox = () => {
  return (
    <>
    <div className='nameBox-container'>
        <h2>What is the name of your application?</h2>
        <span> Only lowercase and uppercase letters.</span>
        <input placeholder='ex:gridproject'/>
        <button>Continue</button>
    </div>
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    </>
  )
}

export default NameBox
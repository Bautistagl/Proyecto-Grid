import Image from 'next/image'
import React from 'react'

const NameBox = ({onNextStep}) => {
  return (
    <>
    
    <div className='nameBox-container'>
        <h2>What is the name of your application?</h2>
        <span> Only lowercase and uppercase letters.</span>
        <input placeholder='ex:gridproject'/>
        <button onClick={()=>onNextStep()}>Continue</button>
    </div>
  
    </>
  )
}

export default NameBox
import Image from 'next/image'
import React from 'react'

const PreDeploy = ({onNextStep}) => {
  return (
    <>
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={25} height={25} src='/dot.png'/>
    <div className='envVar-container'>
    <h3>Pre-Deploy job <p>(optional) </p></h3>
    <span>If specified, this is a job that will be run before every deployment.</span>
    <button className='button-newApp'> + Add a new Pre-Deploy job</button>
    <button  onClick={()=>onNextStep()}> Continue</button>
    
</div>

    </>
  )
}

export default PreDeploy
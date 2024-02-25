import Image from 'next/image'
import React from 'react'

const PreDeploy = ({onNextStep}) => {
  return (
    <>
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    <div className='envVar-container'>
    <h2>Pre-Deploy job <p>(optional) </p></h2>
    <span>If specified, this is a job that will be run before every deployment.</span>
    <button className='button-newApp'> + Add a new Pre-Deploy job</button>
    <button  onClick={()=>onNextStep()}> Continue</button>
    
</div>

    </>
  )
}

export default PreDeploy
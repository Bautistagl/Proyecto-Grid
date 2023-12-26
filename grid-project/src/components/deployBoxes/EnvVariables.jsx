import Image from 'next/image'
import React from 'react'

const EnvVariables = () => {
  return (
    <>
    <div className='envVar-container'>
        <h2>Environment variables <p>(optional) </p></h2>
        <span>Deploy from a Git repository or a Docker registry.</span>
        <button className='button-newApp'> + Add row</button>
        <button> Continue</button>
    </div>
    <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    </>
  )
}

export default EnvVariables
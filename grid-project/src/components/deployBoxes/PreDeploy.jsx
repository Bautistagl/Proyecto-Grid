import React from 'react'

const PreDeploy = () => {
  return (
    <div className='envVar-container'>
    <h2>Pre-Deploy job <p>(optional) </p></h2>
    <span>If specified, this is a job that will be run before every deployment.</span>
    <button className='button-newApp'> + Add a new Pre-Deploy job</button>
    <button> Continue</button>
</div>
  )
}

export default PreDeploy
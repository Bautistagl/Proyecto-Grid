import React from 'react'

const EnvVariables = () => {
  return (
    <div className='envVar-container'>
        <h2>Environment variables <p>(optional) </p></h2>
        <span>Deploy from a Git repository or a Docker registry.</span>
        <button className='button-newApp'> + Add row</button>
        <button> Continue</button>
    </div>
  )
}

export default EnvVariables
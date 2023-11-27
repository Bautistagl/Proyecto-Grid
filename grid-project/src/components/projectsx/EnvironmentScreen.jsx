import React from 'react'

const EnvironmentScreen = () => {
  return (
    <div>
        <div className='environment-box'>
            <h3>Environment Variables</h3>
            <span> Use environment variables to store API keys and other configuration values and secrets. You can access them in your code like regular environment variables, for example with os.getenv() in Python or process.env in Node. </span>
            <button> Add Environment Variable</button>

        </div>
        <div className='environment-box'>
            <h3>Secret files</h3>
            <span> You can store secret files (like .env or .npmrc files and private keys) in Render. These files can be accessed during builds and in your code just like regular files.

Secret files are available to read at the root of your repo (or Docker context). </span>
            <button> Add Secret File</button>

        </div>
        <div style={{marginBottom:'50px'}} className='environment-box'>
            <h3>Secret files</h3>
            <h2> You havent created any environment groups yet</h2>
            <span style={{textAlign:'center',width:'50%',margin:'10px auto'}}>Environment groups are collections of environment variables and secret files that you can share across multiple services. </span>
            <button> New Environment Group</button>

        </div>
        <div style={{opacity:'0'}}>.</div>
    </div>
  )
}

export default EnvironmentScreen
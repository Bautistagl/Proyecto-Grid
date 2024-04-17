import React from 'react'

const EnvModal = ({visible}) => {
  return (
    <div className="card2">
        <h3>Environment Variable</h3>
        <div className='envInputs'>
            <div style={{width:'100%'}}>
        <label> Key</label>
        <input/>
            </div>

            <div style={{width:'100%'}}>
        <label>Value</label>
        <input/>
            </div>
        </div>

       

      
       

        <button onClick={() => visible()}> Save</button>
    </div>
  )
}

export default EnvModal
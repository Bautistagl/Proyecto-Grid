import React from 'react'

const WhatApp = () => {
  return (
    <div className='whatApp-container'>
        <h2> What are you looking to deploy? </h2>
        <div style={{margin:'20px auto'}}>
            <button>Application</button>
            <button>Database</button>
        </div>
    </div>
  )
}

export default WhatApp
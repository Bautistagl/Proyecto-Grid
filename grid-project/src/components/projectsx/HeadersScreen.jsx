import Image from 'next/image'
import React from 'react'

const HeadersScreen = () => {
  return (
    <div>
    <div className='environment-box'>
        <h3> HTTP Response Headers</h3>
       <span style={{width:'70%',marginRight:'auto'}}> Use HTTP headers to inject response headers in static site responses. You can also use wildcards like /path/* to add headers to responses for all matching request paths. </span>
      <div className='inputs-headers'>

        <div>
          <label>Request Path</label>
          <input placeholder='/static/*'/>
        </div>

        <div> 
         <label>Header Name</label>
          <input placeholder='Cache-Control'/>
        </div>

        <div style={{width:'60%'}}>
          <label>Header Value</label>
          <input placeholder='public, max-age=604800'/>
        </div>
        <div style={{marginLeft:'auto',marginRight:'10px'}}>
          
          <Image alt='' src='/delete2.png' width={25} height={25}/>
        </div>

      </div>
      <div className='botones-header'>
      <button style={{background:'transparent'}}>Add Header</button>
      <button>Save Changes</button>
      </div>
       

   </div>
</div>
  )
}

export default HeadersScreen
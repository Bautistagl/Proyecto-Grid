import React, { useState } from 'react'

const Project = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
      return setSelected(i);
    };
  return (
   
    <div style={{height:'60px'}} className="titulos-home2">
      
      <span style={{marginRight:'5vw'}}>nippon</span>
    

   
      <span style={{marginRight:'8vw'}}>Failed deploy</span>
   

    
      <span>Static Site</span>
      <span>Static</span>
      <span>Global</span>
      <span>4 days ago</span>
    
   </div>
    
  )
}

export default Project
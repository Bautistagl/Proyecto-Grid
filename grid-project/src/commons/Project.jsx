import Link from 'next/link';
import React, { useState } from 'react'

const Projectx = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
      return setSelected(i);
    };
  return (
   
    <>
    <Link href='/profile/project/events'>
    <div style={{height:'60px'}} className="titulos-home2">
      
      <span style={{marginRight:'5vw'}}>nippon</span>
    

   
      <span style={{marginRight:'8vw'}}>Failed deploy</span>
   

    
      <span>Static Site</span>
      <span>Static</span>
      <span>Global</span>
      <span>4 days ago</span>
    
   </div>
    </Link>
    </>
    
  )
}

export default Projectx
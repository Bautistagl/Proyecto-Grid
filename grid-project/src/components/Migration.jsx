import React, { useState } from 'react'
import ItemMigration from './ItemMigration'
import MigrationForm from './MigrationForm'

const Migration = () => {
    const [popUp,setPopUp] = useState(false)
  return (
    <div  >

    <div className='faded' style={{marginTop:'50px',marginBottom:'100px'}}>
         <div className="titulo-asic"> White-glove migration offer</div>
      <div className="subtituloBanner2">Pressed on bandwidth?We ll handle all the migration work for you.</div>
      <div style={{display:'flex',justifyContent:'center'}}>

      <ItemMigration
        number={1}
        title={'Streamlined Migration Planning'}
        subtitle={'Expert guidance for a seamless cloud transition'}
      />
      <ItemMigration
         number={2}
         title={'Effortless Porter Onboarding'}
         subtitle={'Get your infrastructure up and running with our expert assistance'}
      />
      <ItemMigration
      number={3}
      title={'Confident Production Migration'}
      subtitle={'Redirect your production traffic to porter only after testing it out'}
      />
      </div>
        <button onClick={()=>setPopUp(!popUp)} style={{display:'flex',margin:'auto',marginTop:'50px',backgroundColor:'#0c1317'}}> Start Migrating</button>
    </div>
    {popUp ? <MigrationForm/> : ''}
        
    </div>
  )
}

export default Migration
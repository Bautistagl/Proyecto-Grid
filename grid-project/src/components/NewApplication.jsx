import Image from 'next/image'
import React from 'react'

const NewApplicationj = () => {
  return (
    <>
    <div className='contenedor-newApp' >
        <div className='contenedor-flex-only'>
            <Image style={{marginRight:'10px'}} alt='' src='/iconNewApp2.png' width={50} height={50}/>    
            <div className='div-newApp'> Deploy a new application</div>
         </div>
         <span className='span-newApp'> Application name </span>
         <span className='span-newApp2'> Lowercase letters, numbers, and "-" only. </span>
         <input className='input-newApp' placeholder='ex: grid-project'/>
         


         <span style={{marginTop:'40px'}} className='span-newApp'> Deployment Method </span>
         <span className='span-newApp2'> Deploy from a Git repository or a Docker registry. </span>
         <div className='contenedor-flex-only'>

         <div className='card-newApp'>
            <Image className='icon-card-newApp' src='/iconGit.png' alt='/iconGit.png' height={50} width={50}/>
            <span className='span-newApp'> Git repository </span>
            <span className='span-newApp2'> Deploy using source from a Git repo. </span>

         </div>
         <div style={{marginLeft:'30px'}} className='card-newApp'>
         <Image  className='icon-card-newApp' src='/iconDocker.webp' alt='/iconGit.png' height={50} width={50}/>
         <span className='span-newApp'> Docker registry </span>
         <span className='span-newApp2'> Deploy a container from an image registry. </span>
         </div>
         </div>
    </div>

    </>
  )
}

export default NewApplicationj
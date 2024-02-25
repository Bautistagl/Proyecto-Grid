import Image from 'next/image'
import React from 'react'

const DeployMethod = ({onNextStep}) => {
  return (
    <>
      <Image style={{display:'flex',justifyContent:'center',margin:'auto'}} alt='' width={30} height={30} src='/dots.png'/>
    <div className='deployMethod-container'>
        <h2>Select a deployment method</h2>
        <span>Deploy from a Git repository or a Docker registry.</span>
        <div className="contenedor-flex-only">
          <div className="card-newApp">
            <div className='icono-titulo'>

            <Image
              className="icon-card-newApp"
              src="/iconGit.png"
              alt="/iconGit.png"
              height={50}
              width={50}
            />
            <span className="span-newApp"> Git repository </span>
            </div>
            <span className="span-newApp2">
              {' '}
              Deploy using source from a Git repo.{' '}
            </span>
         
          </div>
          <div style={{ marginLeft: '30px' }} className="card-newApp">
            <div className='icono-titulo'>

            <Image
              className="icon-card-newApp"
              src="/iconDocker.webp"
              alt="/iconGit.png"
              height={50}
              width={50}
            />
            <span className="span-newApp"> Docker registry </span>
            </div>
            <span  className="span-newApp2">
              {' '}
              Deploy a container from an image registry.{' '}
            </span>
            <input  placeholder='Docker image namespace/repository:tag' />
          </div>
        </div>
          <button style={{margin:'auto',marginBottom:'30px'}} className='boton-continue' onClick={()=>onNextStep()}>Continue</button>
    </div>
  
    </>
  )
}

export default DeployMethod
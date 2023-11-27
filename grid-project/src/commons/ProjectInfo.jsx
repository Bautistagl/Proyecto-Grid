import React from 'react'

const ProjectInfo = () => {
  return (
    <>
    <div style={{opacity:'0'}}>.</div>
    <div className='projectDataContainer'>
        <div className='data-project'>
        <h3> <img className='icon-chico-project' alt='' src='/webIcon.png'/> STATIC SITE</h3>
        <h2> nippon</h2>
        <p> <img className='icon-chico-project' alt='' src='/github.png' /> Bautistagl / nippon main</p>
        <span> https://nippon.onrender.com </span>
        </div>
        <div className='botones-project'>
            <button> Connect </button>
            <button style={{marginLeft:'30px'}}> Manual Deploy</button>
        </div>
    </div>
    </>
  )
}

export default ProjectInfo
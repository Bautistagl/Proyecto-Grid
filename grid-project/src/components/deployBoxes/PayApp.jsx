import Botonera from '@/commons/Botonera'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PayApp = ({onNextStep}) => {
  return (
    <>
    <section style={{marginTop:'30px'}} className='contact-section'> 

    <div  className='contact-container2' >
      <div className='titulos-contact'>
        <div style={{marginTop:'-30px'}}>
      <Botonera titulo="I agree with Terms of Service" />
        </div>
        <div style={{marginTop:'20px',marginBottom:'-30px'}} className='contact-subtitulo'>Register App</div>
        <div className='iconos-register'>
            <Image alt='' src='\zelID.svg' width={70} height={70}/>
            <Image alt='' src='/walletconnect.svg' width={70} height={70}/>
            <Image alt='' src='/sspLogo.svg' width={70} height={70}/>
            <Image alt='' src='/metamask.svg' width={70} height={70}/>
            

        </div>
       
      </div>
        <div className='contact-form'>
            <label> Message</label>
            <input className='contact-input' placeholder='Messagge'/>
            <label>Address</label>
            <input className='contact-input' placeholder='Insert ZellId or Bitcoin address'/>
          
            <label>Signature</label>
            <input className='contact-input' placeholder='Insert Signature'/>
          
            <div className='contenedorFlex2'>
            <button className='boton-contact-form'> Register App</button>
          
            </div>
            
        </div>

    </div>
    </section>
        <button onClick={()=>onNextStep()}> Continue</button>
    <div style={{opacity:'0'}}>.</div>
    </>
  )
}

export default PayApp

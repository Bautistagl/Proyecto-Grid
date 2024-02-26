import Botonera from '@/commons/Botonera'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PayApp = ({onNextStep}) => {
  return (
    <>
 

    <div  className='contact-container2' >
      <div className='titulos-contact'>
       
      
     
        <h1>Register App</h1>
        <div className='iconos-register'>
            <Image alt='' src='/zelID.svg' width={50} height={50}/>
            <Image alt='' src='/walletconnect.svg' width={50} height={50}/>
            <Image alt='' src='/sspLogo.svg' width={50} height={50}/>
            <Image alt='' src='/metamask.svg' width={50} height={50}/>
            

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
            <Botonera titulo="I agree with Terms of Service" />
        </div>

    </div>
   
        <button onClick={()=>onNextStep()}> Continue</button>
    <div style={{opacity:'0'}}>.</div>
    </>
  )
}

export default PayApp

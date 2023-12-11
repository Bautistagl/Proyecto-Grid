import Link from 'next/link'
import React from 'react'


const ContactForm = () => {
  return (
    <section className='contact-section'> 

    <div className='contact-container2' >
      <div className='titulos-contact'>

        <div className='contact-titulo'> I am a company </div>
        <div className='contact-subtitulo'> WANT TO BECOME A PARTNER?</div>
        <div className='contenedorFlex2'>
            <button className='boton-contact-form'>  SEND</button>
            <button className='boton-contact-form'> <Link href='https://cal.com/bautista-gonzalez-lazo-g8xn68'> BOOK A DEMO </Link> </button>
          
           
            </div>
      </div>
        <div className='contact-form'>
            <input className='contact-input' placeholder='Name / Company'></input>
            <input className='contact-input' placeholder='Email'></input>
            <input className='contact-input' placeholder='What type of application want to host?'></input>
            <textarea className='contact-input-description' placeholder={`Write us your suggestions and ideas, let's talk`}/>
            
        </div>


    </div>
    </section>
  )
}

export default ContactForm
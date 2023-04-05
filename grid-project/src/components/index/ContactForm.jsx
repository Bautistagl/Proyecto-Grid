import React from 'react'


const ContactForm = () => {
  return (
    <section className='contact-section'> 

    <div className='contact-container' >
        <div className='contact-titulo'> I am a company </div>
        <div className='contact-subtitulo'> WANT TO BECOME A PARTNER?</div>
        <form className='contact-form'>
            <input className='contact-input' placeholder='Name / Company'></input>
            <input className='contact-input' placeholder='Email'></input>
            <input className='contact-input-description' placeholder={`Write us your suggestions and ideas, let's talk`}></input>
            <div className='contact-button'><span className='contact-span'>Send</span> </div>
        </form>


    </div>
    </section>
  )
}

export default ContactForm
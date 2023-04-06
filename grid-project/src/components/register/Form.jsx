import Link from 'next/link';
import React, { useState } from 'react';


function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  }

  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <h2 className='register-title' >Create Acount</h2>
      <div className='register-redes'> 
      <a className='a-redes-register'>
        <img className='logo-google-register' src='/search.png'/>
      </a>
      <a className='a-redes-register' >
        <img className='logo-facebook-register' src='/facebook.png'/>
      </a>
      </div>\
      <div className='register-separador'> 

      <hr className='separator' /> <span className='letra-separador'> o </span> <hr className='separator' />
      </div>
        <input placeholder='Email' className='register-input' type="email"  value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder='Password' className='register-input' type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button className='register-submit' type="submit" >Create free acount</button>
      <div className='member-container'>
      <div className='member-register'>
        Already a member?
        <Link href="/login">
        <span className='member2-register'> Log in </span>
        </Link>
      </div>
      </div>
    </form>

  );
}

export default Form;
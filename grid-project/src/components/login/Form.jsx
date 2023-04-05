import React, { useState } from 'react';


function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  }

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2 className='login-title' >Login to your account</h2>
      <div className='login-redes'> 
      <a className='a-redes-login'>
        <img className='logo-google-login' src='/search.png'/>
      </a>
      <a className='a-redes-login' >
        <img className='logo-facebook-login' src='/facebook.png'/>
      </a>
      </div>\
      <div className='login-separador'> 

      <hr className='separator' /> <span className='letra-separador'> o </span> <hr className='separator' />
      </div>
        <input placeholder='Email' className='login-input' type="email"  value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder='Password' className='login-input' type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
      <div className='login-submit' type="submit" >Login</div>
      <div className='forgot-login'>
        Forgot your password?
      </div>
      <div className='member-container'>

      <div className='member-login'>
        Not a member yet?
        <span className='member2-login'> Choose a hosting plan </span>
         and start right now!
      </div>
      </div>
    </form>

  );
}

export default Form;
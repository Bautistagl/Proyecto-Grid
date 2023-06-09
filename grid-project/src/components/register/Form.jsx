import Link from 'next/link';
import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className='contenedor-login'> 
    <div className='textos-login'> 
    <div> Grid Mine </div>
    <h1> Deploy and scale effortlessly with Grid Mine</h1>
    <span> <img alt='' src=''/> 14 day free trial (no credit card required) </span>
    <span> <img alt='' src=''/> Generous stratup program for seed-stage companies </span>
    <span> <img alt='' src=''/> Use your AWS credits </span>


    </div>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Create your Grid Mine account</h2>
      <div className='github-login'> <img className='login-icono' alt='' src='/github.png'/> <span> Sign up with GitHub</span></div>
      <div className="login-separador">
        <hr className="separator" />{' '}
        <span className="letra-separador"> o </span>{' '}
        <hr className="separator" />
      </div>
      <div className='doble-contenedor'>
      <input
        placeholder="First name"
        className="login-input-small"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Last name"
        className="login-input-small"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
        
      
     </div>
      <input
        placeholder="Company name"
        className="login-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Email"
        className="login-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Password"
        className="login-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Link href="/profile">
        <button className="login-submit" type="submit">
          Continue
        </button>
      </Link>
     
      <div className="member-container">
        <div className="member-login">
          Already have an account?
          <Link href='/login'> 
          <span className="member2-login"> Log in  </span>
          </Link>
          
        </div>
      </div>
    </form>
    </div>
  );
}

export default Form;

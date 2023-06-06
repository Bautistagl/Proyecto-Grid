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
    <h1> Welcome back to Grid Mine</h1>
    <span> <img alt='' src=''/> Read the Grid Mine docs </span>
    <span> <img alt='' src=''/> See whats new with Grid Mine </span>
    <span> <img alt='' src=''/> Join the community </span>


    </div>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Login to your Grid Mine account</h2>
      <div className='github-login'> <img className='login-icono' alt='' src='/github.png'/> <span> Log in with GitHub</span></div>
      <div className="login-separador">
        <hr className="separator" />{' '}
        <span className="letra-separador"> o </span>{' '}
        <hr className="separator" />
      </div>
      
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
          Login
        </button>
      </Link>
      <div className="forgot-login">Forgot your password?</div>
      <div className="member-container">
        <div className="member-login">
          Not a member yet?
          <span className="member2-login"> Choose a hosting plan </span>
          and start right now!
        </div>
      </div>
    </form>
    </div>
  );
}

export default Form;

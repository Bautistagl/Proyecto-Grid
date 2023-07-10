import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [selected, setSelected] = useState(false);

  const toggle = () => {
    if (selected === true) {
      return setSelected(false);
    }
    setSelected(true);
  };
  
  const toggleMenu = () => {
    setMenu(!menu);
    setSelected(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}  `}>
        <Link href="/">
          <img className="navbar-logo" src="/gridLogo1.png" />
        </Link>
        <div>
          <Link href="/login">
            <img className="login-navbar" src="/login.png" alt="login" />
          </Link>
        </div>

        <div onClick={() => toggleMenu()} className="hamburguer-navbar">
          {' '}
          {menu === false ? (
            <img className="hamburger-logo" src={'/menu.png'} />
          ) : (
            <img className="hamburger-logoCerrado" src={'/menuCerrado.png'} />
          )}{' '}
        </div>

        <ul className="nav-items">
          
          <div onClick={() => {
            setDropdown(!dropdown)
            setDropdown2(false)
          
          }} className="nav-title">
            {' '}
            Productos
            <img className="downNavbar" src="/downNavbar.png" alt="" />
          </div>
          <div onClick={() => {
            setDropdown2(!dropdown2)
            setDropdown(!false)

            }} className="nav-title"> Why choose us?
          <img className="downNavbar" src="/downNavbar.png" alt="" />
           </div>
          
          <div className="nav-title"> Contact </div>
        </ul>
        <Link href="/login">
          <button className="boton-landing1">Login</button>
        </Link>
        <Link href="register">
          <button className="boton-landing">Register</button>
        </Link>
      </nav>

      <div className={`menu-navbar ${menu ? 'show' : ''}`}>
        <ul className="menu-items">
         
          <div className="menu-title" onClick={() => toggle()}>
            {' '}
            Productos
            <span className="hamburger-span">
              {selected === true ? (
                <img className="hamburger-cerrado" src={'/cerrado.png'} />
              ) : (
                <img className="hamburger-abierto" src={'/abierto.png'} />
              )}
            </span>
          </div>
          <div className={selected === true ? 'producto show' : 'noshow'}>
            <div className="productos">
              <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
              <div className="descripcion-productos">
                <span className="titulo-productos"> Cloud Hosting </span>
                <span className="subtitulo-productos">
                  {' '}
                  Una descripcion un poco mas larga paraq ver{' '}
                </span>
              </div>
            </div>
            <div className="productos">
              <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
              <div className="descripcion-productos">
                <span className="titulo-productos"> VPS </span>
                <span className="subtitulo-productos">
                  {' '}
                  Una descripcion un poco mas larga paraq ver{' '}
                </span>
              </div>
            </div>
            <div className="productos">
              <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
              <div className="descripcion-productos">
                <Link href="/web_hosting">
                  <span className="titulo-productos"> Web Hosting </span>
                </Link>
                <span className="subtitulo-productos">
                  {' '}
                  Una descripcion un poco mas larga paraq ver{' '}
                </span>
              </div>
            </div>
            <div className="productos">
              <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
              <div className="descripcion-productos">
                <span className="titulo-productos"> Game Servers </span>
                <span className="subtitulo-productos">
                  {' '}
                  Una descripcion un poco mas larga paraq ver{' '}
                </span>
              </div>
            </div>
            <div className="productos">
              <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
              <div className="descripcion-productos">
                <span className="titulo-productos"> VPN </span>
                <span className="subtitulo-productos">
                  {' '}
                  Una descripcion un poco mas larga paraq ver{' '}
                </span>
              </div>
            </div>
            <div className="productos">
              <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
              <div className="descripcion-productos">
                <span className="titulo-productos"> Fan Cooling Mobile </span>
                <span className="subtitulo-productos">
                  {' '}
                  Una descripcion un poco mas larga paraq ver{' '}
                </span>
              </div>
            </div>
            <div className="productos">
              <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
              <div className="descripcion-productos">
                <Link href="/asic_mining">
                  <span className="titulo-productos"> Asic Mining </span>
                </Link>
                <span className="subtitulo-productos">
                  {' '}
                  Una descripcion un poco mas larga paraq ver{' '}
                </span>
              </div>
            </div>
            <div className="productos">
              <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
              <div className="descripcion-productos">
                <Link href="/immersion_cooling">
                  <span className="titulo-productos">
                    {' '}
                    Immersion Cooling Mining{' '}
                  </span>
                </Link>
                <span className="subtitulo-productos">
                  {' '}
                  Una descripcion un poco mas larga paraq ver{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="menu-title"> Solutions </div>
          <div className="menu-title"> About Us </div>
          <div className="menu-title"> Contact </div>
        </ul>
      </div>
      <div
        className={`container-productos ${dropdown ? 'show' : ''} ${
          isSticky ? 'sticky' : ''
        }`}
        onMouseOver={() => {
          setDropdown(true)
          setDropdown2(false)
        }}
        onMouseLeave={() => setDropdown(false)}>
      
       
        <div className="productos">
          <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
          <div className="descripcion-productos">
            <Link href="/web_hosting">
              <span className="titulo-productos"> Web Hosting </span>
            </Link>
            <span className="subtitulo-productos">
              {' '}
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
     
     
        <div className="productos">
          <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
          <div className="descripcion-productos">
            <Link href="/asic_mining">
              <span className="titulo-productos"> Asic Mining </span>
            </Link>
            <span className="subtitulo-productos">
              {' '}
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>  
        </div>
        <div className="productos">
          <img alt="" className="logo-productos" src={'/cloudIcon.png'} />
          <div className="descripcion-productos">
            <Link href="/immersion_cooling">
              <span className="titulo-productos">
                {' '}
                Immersion Cooling Mining{' '}
              </span>
            </Link>
            <span className="subtitulo-productos">
              {' '}
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
      </div>




      <div
        className={`container-productos ${dropdown2 ? 'show' : ''} ${
          isSticky ? 'sticky' : ''
        }`}
        onMouseOver={() => {
          setDropdown2(true)
          setDropdown(false)
        }}
        onMouseLeave={() => setDropdown2(false)}>
      
       
        <div className="productos">
          <img alt="" className="logo-productos" src={'/solution.png'} />
          <div className="descripcion-productos">
            <Link href="/web_hosting">
              <span className="titulo-productos"> Solutions </span>
            </Link>
            <span className="subtitulo-productos">
              {' '}
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
     
     
        <div className="productos">
          <img alt="" className="logo-productos" src={'/aboutUs.png'} />
          <div className="descripcion-productos">
            <Link href="/asic_mining">
              <span className="titulo-productos"> About Us </span>
            </Link>
            <span className="subtitulo-productos">
              {' '}
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>  
        </div>
        <div className="productos">
          <img alt="" className="logo-productos" src={'/blog.png'} />
          <div className="descripcion-productos">
            <Link href="/immersion_cooling">
              <span className="titulo-productos">
                {' '}
                Blog{' '}
              </span>
            </Link>
            <span className="subtitulo-productos">
              {' '}
              Una descripcion un poco mas larga paraq ver{' '}
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;

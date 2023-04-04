import React,{useState,useEffect,useRef} from 'react'
import Link from 'next/link'




function Navbar()  {
    const[dropdown,setDropdown] = useState(false)
    const[menu,setMenu] = useState(false)
    const [isSticky, setIsSticky] = useState(false);

    const [selected, setSelected] = useState(false);

const toggle = () => {
  if(selected === true) {
    return setSelected(false)
  }
  setSelected(true)
}
const toggleMenu = () => {
  setMenu(!menu)
  setSelected(false)
}


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
                   <img className='navbar-logo' src="/gridLogo1.png"/>
             </Link>
             <div
              onClick={()=>toggleMenu() }
              
             className='hamburguer-navbar'> {menu===false ?  <img className='hamburger-logo' src={"/menu.png"}/> : <img className='hamburger-logoCerrado' src={"/menuCerrado.png"}/>} </div>
        <ul className='nav-items'>
          <div className='nav-title'> Home</div>
          <div
           onMouseOver={() => setDropdown(true)}
          className='nav-title'> Productos 
           </div>
          <div className='nav-title'> Solutions </div>
          <div className='nav-title'> About Us </div>
          <div className='nav-title'> Contact </div>

        </ul>
          <button className='boton-landing' >
    <span>Login</span>
    <i />
  </button>
  <button >
    <span>Register</span>
    <i />
  </button>
        </nav>
        <div className={`menu-navbar ${menu ? 'show' : ''}`}> 
        <ul className='menu-items'>
          <div className='menu-title'> Home</div>
          <div
          className='menu-title'
          onClick={()=>toggle()}
          > Productos
           <span className='hamburger-span' >{selected === true ? <img className='hamburger-cerrado' src={"/cerrado.png"} /> : <img className='hamburger-abierto' src={"/abierto.png"} />}</span>
           </div>
          <div className={selected === true ? 'producto show' : 'noshow'}>
          <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Cloud Hosting  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> VPS  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Web Hosting  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Game Servers </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> VPN </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Fan Cooling Mobile  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Asic Mining </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Immersion Cooling Mining </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>

          </div>
          <div className='menu-title'> Solutions </div>
          <div className='menu-title'> About Us </div>
          <div className='menu-title'> Contact </div>
          
        </ul>
        
        </div>
        <div className={`container-productos ${dropdown ? 'show' : ''} ${isSticky ? 'sticky' : '' }`}
          onMouseOver={() => setDropdown(true)}
          onMouseLeave={()=>setDropdown(false)}
          >

              <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Cloud Hosting  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> VPS  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Web Hosting  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Game Servers </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> VPN </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Fan Cooling Mobile  </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Asic Mining </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
               <div className='productos'> 
               <img alt='' className='logo-productos' src={"/cloudIcon.png"}/>
               <div  className='descripcion-productos'> 
               <span className='titulo-productos'> Immersion Cooling Mining </span>
               <span className='subtitulo-productos'> Una descripcion un poco mas larga paraq ver  </span>
               </div>
               </div>
          </div>
          
    </>
  )
}

export default Navbar

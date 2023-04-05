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
          <div className='nav-title'> Hosting </div>
          <div className='nav-title'> Emails</div>
          <div className='nav-title'> Domains </div>
          <div className='nav-title'> VPS Server </div>
          <div className='nav-title'> SSL </div>
          <div className='nav-title'> Facturacion </div>

        </ul>
      
        </nav>
        <div className={`menu-navbar ${menu ? 'show' : ''}`}> 
        <ul className='menu-items'>
          <div className='menu-title'> Home</div>
          <div className='menu-title' > Productos
           <span className='hamburger-span' >{selected === true ? <img className='hamburger-cerrado' src={"/cerrado.png"} /> : <img className='hamburger-abierto' src={"/abierto.png"} />}</span>
           </div>
          <div className='menu-title'> Solutions </div>
          <div className='menu-title'> About Us </div>
          <div className='menu-title'> Contact </div>
          
        </ul>
        
        </div>
   
          
    </>
  )
}

export default Navbar

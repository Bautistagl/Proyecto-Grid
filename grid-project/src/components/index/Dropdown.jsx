import React, { useState } from 'react'
import { products } from './NavUtils'
import { Link } from 'react-router-dom'
import "../styles/Dropdown.css"
import "../styles/Icon.css"
import { cpu } from '../assets'
const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    const [isSticky, setIsSticky] = useState(false);
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
    <div className={`container-menu ${isSticky ? 'sticky' : ''}`}> 
        <ul 
          className={dropdown ? "products-submenu clicked" : "products-submenu"} 
          onClick={() => setDropdown(!dropdown)}>
            {products.map((item) =>{
                return(
                    <li className='li-drop' key={item.id}>
                      <a className='container'>  

                           
                            <div className='titulo'> {item.title} </div>                     
                            <p className='desc'>{item.desc} </p>
                           
                      </a>                                               
                    </li>
                )
            })}

        </ul>
    </div>
  )
}

export default Dropdown
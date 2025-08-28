import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

const Header = () => {
    const [show,setShow] = useState(false)
    const handleclick = ()=>{
        return setShow(!show)
    }
  return (
    <>
     <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="Logo">
                    <NavLink to="/" >
                    <h1>WorldAtlas</h1>
                    </NavLink>
                </div>

                <nav className={show ? 'menu-mobile' : 'menu-web'} >
                    <ul style={{listStyle:'none'}} >
                        <li style={{listStyle:'none',textDecoration:'none'}} ><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/about' >About</NavLink></li>
                        <li><NavLink to='/country' >Country</NavLink></li>
                        <li><NavLink to='/contact' >Contact</NavLink></li>
                    </ul>
                </nav>

                <div className='ham-menu' >
                    <button onClick={handleclick} >
                        <GiHamburgerMenu/>
                    </button>
                </div>

            </div>
        </div>
    </header>   
    </>
  )
}

export default Header
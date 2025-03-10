
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';




const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonTongle = () => {
        setShowMenu(!showMenu)
    }
  return (
    <header>
        <div className='container'>
        <div className='grid navbar-grid'>
            <div className="logo">
                <h1>WorldAtlas</h1>
            </div>
        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/country">Country</Link>
                </li>
            </ul>
        </nav>
        <div className='ham-menu'>
        <button onClick={handleButtonTongle}><GiHamburgerMenu /></button>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

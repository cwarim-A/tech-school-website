import React from 'react';
import  { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import {NavLink} from "react-router-dom"
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav className="navbar">   
        <a href="/">
        <h1 className="logo-text">GoDev</h1>
        </a>
     
      <div className="menu" onClick={toggleMenu}>
         <RxHamburgerMenu  size={25} />
         {menuOpen && (
       <div className='container'>
          <ul className='nav-links-mobile'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className='contact-link' to="/contact">Contact</NavLink>
            </li>
            
          </ul>
      </div>)}
      </div>

      

        <ul className={`nav-links`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className='contact-link' to="/contact">Contact</NavLink>
          </li>
        </ul>
      
    </nav>

    </>
  );
}

export default Navbar;

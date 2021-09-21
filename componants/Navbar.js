import React, {useState} from 'react' 
import {Link} from 'react-router-dom'
import { FaGalacticSenate } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaAtom } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import './Navbar.css';




function Navbar() {
  


    return (
      
          <body>
            <nav className="navbar">
    <ul className="navlist">
      <li className="nav-item">
          <Link to="/" className="navlink">
            <FaBackward className='faimg' size='2.0em'/>
            </Link>
          <p className="link-text logo-text">Phonique</p>
          
      </li>
      
      <li className="nav-item">
        <Link to="/" className="navlink">
            <FaGalacticSenate className='faimg' size='2.0em'/>
            </Link>
          <p className="link-text">About</p>
        
      </li>
      
      <li className="nav-item">
        <Link to="/" className="navlink">
            <FaAtom className='faimg' size='2.0em'/>
            </Link>
          <p className="link-text">Portfolio</p>
        
      </li>
          
      <li className="nav-item">
        <Link to="/" className="navlink">
            <FaAddressBook className='faimg' size='2.0em'/>
            </Link>
          <p className="link-text">Contact</p>
        
      </li>
          
        <li className="nav-item">
          <Link to="/" className="navlink">
              <FaSun className='faimg' size='2.0em'/>
              </Link>
            <p className="link-text">Themes</p>
          
      </li>
      </ul>
      </nav>
      </body>
        
        
    )
    
}

export default Navbar

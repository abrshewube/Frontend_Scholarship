// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './log.png'
const Header = () => {
  return (
    <header className="bg-blue-500 py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
      
  
 
       
        <div>
          <h1 className="text-white font-bold text-2xl">Yotor Scholarships</h1>
        </div>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/home">Scholarships Avaiable</Link>
            </li>
             <li>
              <Link to="/blog">Blogs</Link>
            </li> 
           
           
            <li>
              <Link to="/how_to_apply">How to Apply</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div>
          <img src={logo} className='w-40 h-12' alt="logo"/>
        </div>
      </div>
    </header>
  );
};

export default Header;

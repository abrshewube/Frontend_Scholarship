import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './log.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-blue-100 py-2 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Branding */}
        <div className="flex items-center">
          <Link to="/" className="text-blue-500 font-bold text-lg flex items-center">
            <img src={logo} alt="Yotor Scholarships Logo" className="w-8 h-8 mr-2" />
            Yotor Scholarships
          </Link>
        </div>

        {/* Hamburger Menu for Small Devices and Tablets */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500">
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Bar */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 md:text-blue-500 md:font-semibold`}
        >
          <ul className="md:flex md:space-x-4 md:text-blue-500 md:font-semibold">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/home" onClick={closeMenu}>
                Scholarships
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/videos" onClick={closeMenu}>
                Videos
              </Link>
            </li>
            <li>
              <Link to="/how_to_apply" onClick={closeMenu}>
                How to Apply
              </Link>
            </li>
            <li>
              <Link to="/links" onClick={closeMenu}>
                Important Links
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={closeMenu}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from './log.png';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="bg-blue-500 py-4 shadow-lg">
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         <div >
//           <h1 className="text-white font-bold text-2xl ">Yotor Scholarships</h1>
//         </div>

//         {/* Navigation Bar */}
//         <nav
//           className={`hidden md:flex flex-grow ${
//             isMenuOpen ? 'md:hidden' : ''
//           }`}
//         >
//           <ul className="flex space-x-6 text-white ml-4 font-bold">
         
//             <li>
//               <Link to="/" onClick={closeMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/home" onClick={closeMenu}>
//                 Scholarships Available
//               </Link>
//             </li>
//             <li>
//               <Link to="/blog" onClick={closeMenu}>
//                 Blogs
//               </Link>
//             </li>
//             <li>
//               <Link to="/how_to_apply" onClick={closeMenu}>
//                 How to Apply
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" onClick={closeMenu}>
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link to="/about-us" onClick={closeMenu}>
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/faq" onClick={closeMenu}>
//                 FAQ
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Hamburger Menu for Small Devices and Tablets */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             {!isMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Collapsed Navigation Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-white py-2">
//             <ul className="flex flex-col space-y-2 items-center text-blue-500">
//               <li>
//                 <Link to="/" onClick={closeMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/home" onClick={closeMenu}>
//                   Scholarships Available
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/blog" onClick={closeMenu}>
//                   Blogs
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/how_to_apply" onClick={closeMenu}>
//                   How to Apply
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" onClick={closeMenu}>
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about-us" onClick={closeMenu}>
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/faq" onClick={closeMenu}>
//                   FAQ
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}

//         {/* Search Bar (hidden for small devices and tablets) */}
//         <div className="hidden md:block">
//           <img src={logo} className="w-40 h-12" alt="logo" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

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
    <header className="bg-blue-900 py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Branding */}
        <div>
          <Link to="/" className="text-white font-bold text-2xl flex items-center">
            <img src={logo} alt="Yotor Scholarships Logo" className="w-10 h-10 mr-2" />
            Yotor Scholarships
          </Link>
        </div>

        {/* Hamburger Menu for Small Devices and Tablets */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
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
          } md:flex md:space-x-6 md:text-white md:font-bold`}
        >
          <ul className="md:flex md:space-x-6 md:text-white md:font-bold">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-white bg-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-white bg-blue-600"
              >
                Scholarships
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-white bg-blue-600"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/how_to_apply"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-white bg-blue-600"
              >
                How to Apply
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-white bg-blue-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-white bg-blue-600"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-white bg-blue-600"
              >
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




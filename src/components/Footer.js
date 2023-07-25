import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-blue-500 py-4 text-white mt-5 mb-0">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {/* Privacy Policy */}
          <Link to='/privacy-policy'>Privacy Policy</Link>
          
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {/* Terms and Conditions */}
          <a href="#terms-and-conditions">Terms and Conditions</a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {/* Contact Us */}
          <a href="#contact-us">Contact Us</a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {/* Social Media Links */}
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {/* Related Links */}
          <a href="#college-search-engines">College Search Engines</a>
          <a href="#career-development-websites">Career Development Websites</a>
          <a href="#financial-aid-resources">Financial Aid Resources</a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {/* Site Map */}
          <a href="#site-map">Site Map</a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {/* Feedback */}
          <a href="#feedback">Feedback</a>
        </div>
        <div className="w-full">
          {/* Copyright Notice */}
          <p className="text-center">&copy; 2023  Yotor Scholarship . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



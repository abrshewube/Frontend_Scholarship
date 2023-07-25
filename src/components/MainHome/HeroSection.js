import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-blue-500 py-16">
      <div className="container mx-auto px-4 text-center">

     <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to Yotor  Scholarship
        </h1>
        <p className="text-lg text-white mb-8">
          Find your dream scholarship and unlock your potential.
        </p>
        <Link  to='/home'> <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white">
          Explore Scholarships
        </button></Link>
       
      </div>
     
 

      </div>


 
  );
};

export default HeroSection;

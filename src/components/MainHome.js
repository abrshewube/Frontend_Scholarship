// import React from 'react';
// import HeroSection from './MainHome/HeroSection';
// import Featured from './MainHome/FeaturedScholarships';
// import CountryList from './Countries/CountriesList';
// import ScholarshipInfoPage from './MainHome/Decorators';
// import Animation from './MainHome/Animation'

// const MainHome = () => {
//   // Define a CSS class for the background style
  

//   return (
//     <div >
//       <HeroSection />
//      <ScholarshipInfoPage />
//      <Animation/>
//       <Featured />
//       <CountryList />
//       <br/><br/>
      
//     </div>
//   );
// };

// export default MainHome;
import React from 'react';
import HeroSection from './MainHome/HeroSection';
import Featured from './MainHome/FeaturedScholarships';
import CountryList from './Countries/CountriesList';
import ScholarshipInfoPage from './MainHome/Decorators';
import Animation from './MainHome/Animation';

const MainHome = () => {
  // Define a CSS class for the background style
  const backgroundStyle = {
    background: 'linear-gradient(135deg, #0079BF, #4A90E2)',
    position: 'relative',
    overflow: 'hidden',
  };

  const curveStyle = {
    position: 'absolute',
    bottom: '-50px', // Adjust the curve height
    left: '0',
    right: '0',
    height: '100px', // Adjust the curve height
    background: 'url(wave.png)', // Use your wave image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={backgroundStyle}>
      <HeroSection />
      <ScholarshipInfoPage />
      <Animation />
      <Featured />
      <CountryList />
      <br /><br />
      <div style={curveStyle}></div>
    </div>
  );
};

export default MainHome;

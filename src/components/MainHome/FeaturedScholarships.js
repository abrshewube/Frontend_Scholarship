// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// const FeaturedScholarships = () => {
//   const [featuredScholarships, setFeaturedScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Replace 'http://localhost:8080/api/featured-scholarships' with your backend API endpoint to fetch featured scholarships.
//   useEffect(() => {
//     fetch('https://scholarship-ncvp.onrender.com/api/featured-scholarships')
//       .then((response) => response.json())
//       .then((data) => {
//         setFeaturedScholarships(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-spinner">
//         <div className="spinner"></div>
//         <p className="text-gray-600 font-semibold mt-4"> Featured Scholarships Loading...</p>
//       </div>
//     )
    
//   }

//   if (error) {
//     return <p>Error fetching featured scholarships: {error.message}</p>;
//   }

//   const truncateContent = (content, maxLength) => {
//     if (content.length > maxLength) {
//       return content.substring(0, maxLength) + '...';
//     }
//     return content;
//   };

//   return (
//     <div className="my-10">
//       <h2 className="text-2xl font-bold mb-4 color-red text-center text-blue-800 shadow-lg">Featured Scholarships</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {featuredScholarships.map((scholarship) => (
//           <div key={scholarship._id} className="bg-white p-6 rounded shadow-lg ml-6 mr-2">
//              <h3 className="text-lg font-semibold mb-2 text-red-600">{scholarship.name}</h3>
//              <p className="text-sm  mb-2  ">
//               <span class=' font-bold italic'>Eligibility Criteria:</span> <span className='text-blue-600'>{truncateContent(scholarship.eligibilityCriteria, 100) }</span>
//             </p>
//             <p className="text-sm  ">
//             <span className=' font-bold italic'>Application Deadline:</span> <span className='text-blue-600' >{new Date(scholarship.applicationDeadline).toLocaleDateString() }</span>
//             </p>

            
//             <div className="flex justify-left mt-6 ml-0">
//               <Link
//                 to={`/scholarships/${scholarship._id}`}
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 View Details
//               </Link>
//               </div>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedScholarships;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
const FeaturedScholarships = () => {
  const [featuredScholarships, setFeaturedScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch featured scholarships
  const fetchFeaturedScholarships = () => {
    fetch('https://yotorscholarships.onrender.com/api/featured-scholarships')
      .then((response) => response.json())
      .then((data) => {
        setFeaturedScholarships(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Fetch featured scholarships when the component mounts and whenever featuredScholarships state is updated
    fetchFeaturedScholarships();
  }, [featuredScholarships]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="text-gray-600 font-semibold mt-4">Featured Scholarships Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error fetching featured scholarships: {error.message}</p>;
  }

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4 color-red text-center text-blue-800 shadow-lg">Featured Scholarships</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {featuredScholarships.map((scholarship) => (
          <div key={scholarship._id} className="bg-white p-6 rounded shadow-lg ml-6 mr-2">
             <img src={scholarship.imageurl} alt={scholarship.name} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold mb-2 text-red-600">{scholarship.name}</h3>
            <p className="text-sm  mb-2">
              <span className="font-bold italic">Eligibility Criteria:</span>{' '}
              <span className="text-blue-600">{parse(truncateContent(scholarship.eligibilityCriteria, 100))}</span>
            </p>
            <p className="text-sm">
              <span className="font-bold italic">Application Deadline:</span>{' '}
              <span className="text-blue-600">{new Date(scholarship.applicationDeadline).toLocaleDateString()}</span>
            </p>
            <div className="flex justify-left mt-6 ml-0">
              <Link
                to={`/scholarships/${scholarship._id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedScholarships;


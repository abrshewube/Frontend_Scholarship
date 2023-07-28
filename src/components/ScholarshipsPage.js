import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
const ScholarshipsPage = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch scholarship details when the component mounts
    fetch(`https://scholarship-ncvp.onrender.com/api/scholarships/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setScholarship(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="text-gray-600 font-semibold mt-4">Loading...</p>
      </div>
    )
  }

  if (error) {
    return <p>Error fetching scholarship details: {error.message}</p>;
  }

  if (!scholarship) {
    return <p>No scholarship found with the provided ID.</p>;
  }

  return (
    <div className="container mx-auto px-4 mt-4 mb-4 ">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">{scholarship.name}</h1>
      <div className="bg-white p-6 rounded shadow-2xl">
      <div className="mb-4">
          <img
            src={scholarship.imageurl} // Replace with the URL of the scholarship image
            alt={scholarship.name}
            className="w-70 h-auto rounded-t ml-40 r-15"
          />
        </div>
        <div className='ml-40'>
        <h2 className="text-2xl font-bold mb-4 text-red-500 ">Scholarship Details</h2>
        <h3 className="text-lg font-semibold mb-2 text-blue-500">{scholarship.name}</h3>
        <p className="text-sm text-gray-600 mb-2"><span className='font-bold italic'>Description:</span> {parse(scholarship.description)}</p>
        <p className="text-sm text-gray-600 mb-2"><span className='font-bold italic'>Eligibility Criteria:</span> {scholarship.eligibilityCriteria}</p>
        <p className="text-sm text-gray-600"><span className='font-bold italic'>Application Deadline:</span> {new Date(scholarship.applicationDeadline).toLocaleDateString() }</p>
        <p className="text-sm text-gray-600"><span className='font-bold italic'>Details:</span>Details: {scholarship.category.description}</p>
        {/* Add other scholarship details as needed */}
        </div>
        <div className="flex justify-left mt-6 ml-0">
        <a href={`${scholarship.link}`} target="_blank"  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Apply </a>
            </div>
            
           
      </div>
    </div>
  );
};

export default ScholarshipsPage;




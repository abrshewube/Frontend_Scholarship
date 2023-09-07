// CountryScholarshipPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryScholarshipPage = () => {
  const { country } = useParams();
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch scholarships for the selected country when the component mounts
    fetch(`https://yotorscholarships.onrender.com/api/scholarships/country/${country}`)
      .then((response) => response.json())
      .then((data) => {
        setScholarships(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [country]);
  
  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };
  

  return (
    <div className="container mx-auto px-4 mt-4 mb-4 ml-0">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">
        Scholarships in   {country} 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p className="text-gray-600 font-semibold mt-4">Loading...</p>
          </div>
        ) : error ? (
          <p>Error fetching scholarships: {error.message}</p>
        ) : scholarships.length === 0 ? (
          <p>No scholarships available for {country}.</p>
        ) : (
          scholarships.map((scholarship) => (
            <div
              key={scholarship._id}
              className="bg-white p-6 rounded shadow-lg mb-5"
            >
              <h3 className="text-lg font-semibold mb-2 text-red-600">
                {scholarship.name}
              </h3>
              <p className="text-sm  mb-2  ">
                <span className="font-bold italic">Eligibility Criteria:</span>{" "}
                {truncateContent(scholarship.eligibilityCriteria,100)}
              </p>
              <p className="text-sm  ">
                <span className="font-bold italic">Application Deadline:</span>{" "}
                {new Date(scholarship.applicationDeadline).toLocaleDateString()}
              </p>
              <div className="flex justify-left mt-6 ml-0">
              <Link
              to={`/scholarships/${scholarship._id}`}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CountryScholarshipPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // State to store the selected country code
  const [selectedCountry, setSelectedCountry] = useState(""); // Initialize with an empty string
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all scholarships when the component mounts
    fetch("https://scholarship-ncvp.onrender.com/api/scholarships")
      .then((response) => response.json())
      .then((data) => {
        setScholarships(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCountryChange = (event) => {
    const selectedCode = event.target.value;
    setSelectedCountry(selectedCode);
    // Fetch scholarships by country code when a country is selected
    fetch(`https://scholarship-ncvp.onrender.com/api/scholarships/country/${selectedCode}`)
      .then((response) => response.json())
      .then((data) => {
        setScholarships(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching scholarships: {error.message}</p>;
  }

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };


  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 shadow-lg mt-3 text-center">Available Scholarships</h2>
      {/* Add the country selection dropdown here */}
      <div className="mb-4">
        <label className="block text-sm font-medium  mb-1 text-blue-500">
          Select Country:
        </label>
        <select
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="" >-- Select Country --</option>
          {/* Add options for available countries */}
          <option value="US">United States</option>
          <option value="Ca">Canada</option>
        <option value="En">England</option>
        <option value="Fr">France</option>
        <option value="Ge">Germany</option>
        <option value="De">Denmark</option>
        <option value="Fn">Finland</option>
        
          {/* Add more countries as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarships.map((scholarship) => (
          <div key={scholarship._id} className="bg-white p-6 rounded shadow-lg mb-5">
            <h3 className="text-lg font-semibold mb-2 text-red-600 shadow-lg">{scholarship.name}</h3>
            {/* <p className="text-sm text-gray-600 mb-2">
              Description: {scholarship.description}
            </p> */}
            <p className="text-sm  mb-2  ">
              <span class=' font-bold italic'>Eligibility Criteria:</span> <span class='text-blue-600'>{truncateContent(scholarship.eligibilityCriteria, 100) }</span>
            </p>
            <p className="text-sm  ">
            <span class=' font-bold italic'>Application Deadline:</span> <span class='text-blue-600' >{new Date(scholarship.applicationDeadline).toLocaleDateString() }</span>
            </p>
            {/* Add the button with a Link to ScholarshipsPage */}
            <div className="flex justify-left mt-6 ml-0">
            <Link
              to={`/scholarships/${scholarship._id}`}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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

export default HomePage;





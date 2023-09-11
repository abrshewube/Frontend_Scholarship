import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountryPage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all scholarships when the component mounts
    fetch("https://yotorscholarships.onrender.com/api/scholarships")
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

  return (
    <div className="container mx-auto px-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg mb-5">
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8 inline-block align-text-bottom mr-2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 1.97.79 3.78 2.08 5.08l4.42 4.42C14.22 19.21 16.03 20 18 20c3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 12c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
          </svg>
          <h1 className="text-4xl font-bold mb-4 text-white text-center">
            Scholarships By Countries
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarships.map((scholarship) => (
          <div
            key={scholarship.id}
            className="bg-white rounded-lg shadow-md mb-5 hover:shadow-lg transition duration-300"
          >
            <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-4 rounded-t-lg">
              {scholarship.country.flagUrl && (
                <img
                  src={scholarship.country.flagUrl}
                  alt={`${scholarship.country.name} Flag`}
                  className="w-full h-auto rounded"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {scholarship.country.name}
              </h3>
              <Link
                to={`/country/${scholarship.country.code}`} // Pass the correct variable for the country code
                className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
              >
                View Scholarships
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPage;

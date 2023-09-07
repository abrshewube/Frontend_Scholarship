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
      <h2 className="text-2xl font-bold mb-4 shadow-lg mt-3 text-center">Countries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="bg-white p-6 rounded shadow-lg mb-5">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">{scholarship.country.name}</h3>
            <Link
              to={`/country/${scholarship.country.code}`} // Pass the correct variable for the country code
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Scholarships
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPage;

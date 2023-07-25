import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryScholarshipsPage = () => {
  const { code, scholarshipName } = useParams();
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch scholarships by country code when the component mounts
    fetch(`http://localhost:8080/api/scholarships/country/${code}`)
      .then((response) => response.json())
      .then((data) => {
        setScholarships(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [code]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching scholarships: {error.message}</p>;
  }

  // Find the specific scholarship based on the scholarship name in the URL parameter
  const scholarship = scholarships.find(
    (scholarship) => scholarship.name.toLowerCase().replace(/\s/g, '-') === scholarshipName
  );

  if (!scholarship) {
    return <p>No scholarship found with the provided name in the selected country.</p>;
  }

  return (
    <div className="container mx-auto px-4 mt-4">
      <h2 className="text-2xl font-bold mb-4">Scholarship Details</h2>
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">{scholarship.name}</h3>
        <p className="text-sm text-gray-600 mb-2">Description: {scholarship.description}</p>
        <p className="text-sm text-gray-600 mb-2">Eligibility Criteria: {scholarship.eligibilityCriteria}</p>
        <p className="text-sm text-gray-600">Application Deadline: {scholarship.applicationDeadline}</p>
        {/* Add other scholarship details as needed */}
      </div>
    </div>
  );
};

export default CountryScholarshipsPage;

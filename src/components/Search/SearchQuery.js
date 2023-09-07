import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const SearchPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scholarships, setScholarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Extract the search query from the URL parameter
    const { query } = match.params;
    setSearchQuery(query);

    // Fetch scholarships based on the search query
    fetch(`https://yotorscholarships.onrender.com/api/scholarships/search/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setScholarships(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [match.params]);

  const handleSearchInputChange = (event) => {
    // Update the search query when the input changes
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Redirect to the search page with the updated query
    window.location.href = `/search/${searchQuery}`;
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="text-gray-600 font-semibold mt-4">Loading...</p>
      </div>
    )
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
      <h2 className="text-2xl font-bold mb-4 shadow-lg mt-3 text-center">
        Search Results for "{searchQuery}"
      </h2>

      {/* Add the search input here */}
      <form onSubmit={handleSearchSubmit} className="mb-4">
        <label className="block text-sm font-medium mb-1 text-blue-500">
          Search Scholarships:
        </label>
        <input
          type="text"
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {scholarships.map((scholarship) => (
          <div key={scholarship._id} className="bg-white p-6 rounded shadow-lg mb-5">
            <h3 className="text-lg font-semibold mb-2 text-red-600 shadow-lg">
              {scholarship.name}
            </h3>
            <p className="text-sm mb-2">
              <span className="font-bold italic">Eligibility Criteria:</span>{" "}
              <span className="text-blue-600">
                {parse(truncateContent(scholarship.eligibilityCriteria, 100))}
              </span>
            </p>
            <p className="text-sm">
              <span className="font-bold italic">Application Deadline:</span>{" "}
              <span className="text-blue-600">
                {new Date(scholarship.applicationDeadline).toLocaleDateString()}
              </span>
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
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

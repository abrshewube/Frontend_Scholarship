import React, { useState } from 'react';

const ScholarshipSearch = ({ onSearch }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = () => {
    onSearch(selectedCountry, selectedCategory);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Select Country:</label>
      <select
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">-- Select Country --</option>
        {/* Add options for available countries */}
        <option value="US">United States</option>
        <option value="Ca">Canada</option>
        <option value="En">England</option>
        <option value="Fr">France</option>
        {/* Add more countries as needed */}
      </select>

      <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">Select Category:</label>
      <select
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">-- Select Category --</option>
        {/* Add options for available categories */}
        <option value="engineering">Engineering</option>
        <option value="science">Science</option>
        <option value="science"> Academic</option>
       
        {/* Add more categories as needed */}
      </select>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default ScholarshipSearch;

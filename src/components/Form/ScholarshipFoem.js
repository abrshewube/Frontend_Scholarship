import React, { useState } from 'react';
import axios from 'axios';

const ScholarshipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    eligibilityCriteria: '',
    applicationDeadline: '',
    category: '',
    country: '',
    isFeatured: false,
    imageurl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/scholarships', formData);
      // Do something after successful submission, like showing a success message or redirecting to another page.
    } catch (error) {
      // Handle errors, show error messages, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Scholarship Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="eligibilityCriteria">Eligibility Criteria:</label>
        <textarea id="eligibilityCriteria" name="eligibilityCriteria" value={formData.eligibilityCriteria} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="applicationDeadline">Application Deadline:</label>
        <input type="date" id="applicationDeadline" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="isFeatured">Is Featured:</label>
        <input type="checkbox" id="isFeatured" name="isFeatured" checked={formData.isFeatured} onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })} />
      </div>

      <div>
        <label htmlFor="imageurl">Image URL:</label>
        <input type="text" id="imageurl" name="imageurl" value={formData.imageurl} onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ScholarshipForm;

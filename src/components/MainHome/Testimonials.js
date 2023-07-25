import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace 'http://localhost:8080/api/testimonials' with your backend API endpoint to fetch testimonials.
  useEffect(() => {
    fetch('http://localhost:8080/api/testimonials')
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading testimonials...</p>;
  }

  if (error) {
    return <p>Error fetching testimonials: {error.message}</p>;
  }

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 shadow-lg ">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="bg-white p-6 rounded shadow-lg ml-5 mr-4">
            <div className="flex items-center justify-center mb-4">
              <img
                src={testimonial.photoUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border border-blue-500"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 mb-2 "><span className='italic font-bold'>Institution: </span>{testimonial.institution}</p>
            <p className="text-sm text-gray-600 "><span  className='italic font-bold'>Testimonial:</span> {testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;



  

                  


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser'
const StudentBlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://yotorscholarships.onrender.com/api/blog')
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="text-gray-600 font-semibold mt-4">Loading...</p>
      </div>
    )
  }

  if (error) {
    return <p>Error fetching blog posts: {error.message}</p>;
  }

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 shadow-md mt-5">Student Blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <div key={post._id} className="bg-white p-6 rounded shadow-md mb-3">
            <h3 className="text-lg font-semibold mb-2 text-red-600  shadow-lg">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-2"><span className=' font-bold italic' >Author:</span> {post.author}</p>
          
            <p className="text-sm text-gray-600"><span className=' font-bold italic'>Date:</span> {new Date(post.date).toLocaleDateString()}</p>
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: truncateContent(post.content, 100) }} />

            {/* Add a link to the individual blog post */}
            <div className="flex justify-left mt-6 ml-0">
            <Link to={`/blog/${post._id}`} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Read More
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentBlogPage;

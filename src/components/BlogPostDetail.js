import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
const BlogPostDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://scholarship-ncvp.onrender.com/api/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogPost(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching blog post: {error.message}</p>;
  }

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 mt-4 mb-5">
      <h2 className="text-lg font-semibold mb-2 text-red-600">{blogPost.title}</h2>
      <p className="text-sm text-gray-600 mb-2">Author: {blogPost.author}</p>
      <p className="text-sm text-gray-600">Date: {new Date(blogPost.date).toLocaleDateString()}</p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: parse(blogPost.content) }} />
    </div>
  );
};

export default BlogPostDetail;

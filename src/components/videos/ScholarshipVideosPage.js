import React, { useState, useEffect } from 'react';

// Replace 'YOUR_API_KEY' with your actual YouTube API key
const YOUTUBE_API_KEY = 'AIzaSyDJ1F2dDNwEzR3D_dVmaoTXyZ9lzETu83M';

const ScholarshipVideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch YouTube videos when the component mounts
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = () => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=scholarship&maxResults=30&part=snippet&type=video`;
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching YouTube videos:', error);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="container mx-auto text-center py-8">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Scholarship Videos from Youtube
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id.videoId} className="bg-white rounded-lg overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="225"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {video.snippet.title}
                </h2>
                <p className="text-gray-600">{video.snippet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipVideosPage;

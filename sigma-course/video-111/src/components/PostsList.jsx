import React, { useState, useEffect } from "react";
import PostCard from "./PostCard"; // Import the card component
import "./PostsList.css"; // Import styles

const PostsList = () => {
  // State for posts data
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data); // Populate state with data
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Show loading state
  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  // Show error state
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Render posts using map
  return (
    <div className="posts-container">
      <h1 className="page-title">📝 All Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;

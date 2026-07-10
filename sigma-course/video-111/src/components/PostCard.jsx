import React from "react";

// This component renders a single post card
const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-id">{post.id}</div>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <div className="post-footer">
        <span>User ID: {post.userId}</span>
        <span>Post #{post.id}</span>
      </div>
    </div>
  );
};

export default PostCard;

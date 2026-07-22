import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return (
    <div className="text">
      <h1>👤 User Profile</h1>
      <br />
      <p>
        Username: <strong>{params.username}</strong>
      </p>
      <br />
      <p>Welcome to my profile page!</p>
    </div>
  );
};

export default User;

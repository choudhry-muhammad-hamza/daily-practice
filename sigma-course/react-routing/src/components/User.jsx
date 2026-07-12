import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return <div className="text">User Page. {params.username}</div>;
};

export default User;

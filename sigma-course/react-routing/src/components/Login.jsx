import React from "react";

const Login = () => {
  return (
    <div className="text">
      <h1>🔐 Login Page</h1>
      <br />
      <form>
        <input type="email" placeholder="Email" />
        <br />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

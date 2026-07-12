import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to="/"
        >
          <li className="nav-item">Home</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to="/about"
        >
          <li className="nav-item">About</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to="/login"
        >
          <li className="nav-item">Login</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to="/user/hamza"
        >
          <li className="nav-item">User</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

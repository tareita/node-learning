import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link to="/">Anemay WIP</Link>
          </a>
          <div>
            <div className="navbar-nav">
              <div className="nav-link active">
                <Link to="/register">Register</Link>
              </div>
              <div className="nav-link active">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="navbar">
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in for more contents</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
        <ul className="navBarList">
          <li>
            <Link to="/">Back Home</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
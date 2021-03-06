// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink as Link} from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";


const NavigationBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return(
    <Navbar className="navigationBar" variant="dark" expand='lg'>
    <Navbar.Brand id = "logo" as={Link} to="/"> JimmyChengs </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      {!isAuthenticated &&(
        <Nav className="ml-auto">
        <Nav.Item>
          <Button className="logButton" variant="outline-light" onClick = {()=>loginWithRedirect({})}>
            Log In
          </Button>
        </Nav.Item>
        </Nav>
      )}
      {isAuthenticated && (
        <Nav className="ml-auto">
          <Nav.Link className="linkText" as={Link} to="/home">Home</Nav.Link>
          <Nav.Link className="linkText" as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link className="linkText" as={Link} to="/currency">Currency</Nav.Link>
          <Nav.Link className="linkText" as={Link} to="/weather">Weather</Nav.Link>
          <Nav.Item>
          <Button className="logButton" variant="outline-light" onClick={()=>logoutWithRedirect()}>
            Log Out
          </Button>
        </Nav.Item>
        </Nav>
      )}
    </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;

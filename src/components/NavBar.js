// src/components/NavBar.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });
  
  return (
    <div className="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo" href="/">Jimmys</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
              {!isAuthenticated && (
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Button variant="outline-info" color = "primary" onClick={() => loginWithRedirect({})}>Log In</Button>
                  </NavItem>
                </Nav>
              )}


              {isAuthenticated && (
                <Nav navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/profile">Profile</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/currency">Currency</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/weather">Weather</NavLink>
                  </NavItem>
                  <NavItem>
                    <Button variant="outline-info" color = "primary" onClick={() => logout()}>Log out</Button>
                  </NavItem>
                </Nav>
              )}

          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
// src/components/NavBar.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";

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
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  id="logo"
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Jimmys
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <Nav className="d-none d-md-block" navbar>
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
                    <Button variant="outline-info" color = "primary" onClick={() => logoutWithRedirect()}>Log out</Button>
                  </NavItem>
                </Nav>
              )}
              {!isAuthenticated && (
                <Nav className="d-md-none" navbar>
                  <NavItem>
                    <Button
                      id="qsLoginBtn"
                      color="primary"
                      block
                      onClick={() => loginWithRedirect({})}
                    >
                      Log in
                    </Button>
                  </NavItem>
                </Nav>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
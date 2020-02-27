// src/components/NavBar.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, Navbar, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return(
    <Navbar bg='dark' variant='dark' expand='md'>
    <Navbar.Brand id="logo" href="/"> Jimmys </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      {!isAuthenticated &&(
        <Nav className="ml-auto">
        <Nav.Item>
          <Button 
            className="logButton" 
            variant="outline-info" 
            onClick = {()=>loginWithRedirect({})}
          >
            Log In
          </Button>
        </Nav.Item>
        </Nav>
      )}
      {isAuthenticated && (
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href='home'>Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='profile'>Profile</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='currency'>Currency Converter</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href='weather'>Weather</Nav.Link></Nav.Item>
          <Nav.Item>
          <Button 
            className="logButton" 
            variant="outline-info" 
            onClick={()=>logoutWithRedirect()}
          >
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

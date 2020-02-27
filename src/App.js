import React from 'react';
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import {Container} from "react-bootstrap";

import history from "./utils/history";
import Loading from "./components/Loading";
import PrivateRoute from './components/PrivateRoute';

import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Home from "./views/Home";
import Currency from "./views/Currency";
import Weather from "./views/Weather";


import './App.css';

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <Loading/>;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <Navbar />
        <Container className="mainContent">
          <Switch>
            <Route path="/" exact component={Landing} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/currency" component={Currency} />
            <PrivateRoute path="/weather" component={Weather} />
          </Switch>
       </Container>
       <Footer/>
      </div>
    </Router>
  );
}

export default App

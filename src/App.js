import React from 'react';
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import history from "./utils/history";
import Loading from "./components/Loading";
import PrivateRoute from './components/PrivateRoute';

import NavBar from "./components/NavBar";
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
      <div className="app">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/currency" component={Currency} />
            <PrivateRoute path="/weather" component={Weather} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App

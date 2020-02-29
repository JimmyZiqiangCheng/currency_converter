import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";

const Jumbotron = () => {

  const { loading, user } = useAuth0();

  return(
    <Jumbo fluid className="jumbo">
      <div className = "overlay"> 
          {!user && (
            <h1 className="jumboText"> Please Log In</h1>
          )}
          {user && (
            <h1 className="jumboText"> Welcome, {user.name}</h1>
          )}
      </div>
    </Jumbo>
  );
}

export default Jumbotron;
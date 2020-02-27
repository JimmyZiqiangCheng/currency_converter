import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import jumboImage from "../assets/jumbotronImg.png";

const Jumbotron = () => (
  <Jumbo fluid className="jumbo">
    <div className = "overlay"> 
      <Container>
        <h1 className="jumboTitle"> Welcome Home </h1>
      </Container>
    </div>
  </Jumbo>
)

export default Jumbotron;
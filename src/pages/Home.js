import React from "react";
import Card from "../components/Card";

const Home = () => {
  const card1 = {
    type: "weather",
    description: "You can check your local weather here in real time",
  };
  const card2 = {
    type: "currency",
    description: "You can convert between different currencies here",
  };
  const card3 = {
    type: "crypto",
    description: "You can check the price your favorite crypto currency here",
  };
  const authenticated = false;
  return (
    <div className="home-page">
      <div className="cards">
        <Card cardType={card1.type} description={card1.description} />
        <Card cardType={card2.type} description={card2.description} />
        <Card cardType={card3.type} description={card3.description} />
      </div>
    </div>
  );
};

export default Home;

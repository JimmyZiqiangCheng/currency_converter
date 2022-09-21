import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";

const Home = () => {
  const cards = [
    {
      title: "weather",
      description: "You can check your local weather here in real time",
    },
    {
      title: "currency",
      description: "You can convert between different currencies here",
    },
    {
      title: "crypto",
      description: "You can check the price your favorite crypto currency here",
    },
  ];
  return (
    <div className="home-page">
      <Welcome />
      <div className="cards">
        {cards.map((card, index) => (
          <Link to={`/${card.title}`} className="card-link" key={index}>
            <Card
              cardTitle={card.title}
              cardType={"homepage-card"}
              description={card.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";
import HomeCard from "../components/HomeCard";
import {CardDeck} from "react-bootstrap";

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>;
  }

  const imgCurrency = "../assets/coin.jpg";
  const imgWeather = "../assets/thunder.jpg";

  return (
    <>
      <h1 className="title">This is Your Home, </h1>
      <h2 className="title">{user.name}</h2>
      <div className="homeDeck" >
        <CardDeck style={{ width: '46rem' }}>
          <HomeCard
            imgsrc = {imgCurrency}
            title = "Currency Converter"
            content = "Convert any currency to your liking..."
            buttonText = "Go"
          />
          <HomeCard
            imgsrc = {imgWeather}
            title = "Weather Reporter"
            content = "Check weather information anywhere in the world..."
            buttonText = "Go"
          />
        </CardDeck>
      </div>
    </>
  );
};

export default Home;
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";
import HomeCard from "../components/HomeCard";
import {CardDeck} from "react-bootstrap";
import imgCurrency from "../assets/coin.jpg";
import imgWeather from "../assets/thunder.jpg";

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading/>;
  }

  return (
    <>
      <h1 className="title">Where everything begins ... </h1>
      <div className="homeDeck" >
        <CardDeck style={{ width: '46rem' }}>
          <HomeCard
            imgsrc = {imgCurrency}
            title = "Currency Converter"
            content = "Convert any currency with up-to-date exchange rates ..."
            buttonText = "Go"
            dest="/currency"
          />
          <HomeCard
            imgsrc = {imgWeather}
            title = "Weather Reporter"
            content = "Check weather information anywhere in the world ..."
            buttonText = "Go"
            dest="/weather"
          />
        </CardDeck>
      </div>
    </>
  );
};

export default Home;
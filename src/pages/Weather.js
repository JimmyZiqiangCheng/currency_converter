import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import WeatherPanel from "../components/WeatherPanel";
import { WeatherContext } from "../services/weatherProvider/WeatherProvider";
const Weather = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <div className="weather-page">
      <div className="search-section">
        <SearchBar placeholder={"Enter your city name"} />
      </div>
      <div className="weather-section">{weather && <WeatherPanel />}</div>
    </div>
  );
};

export default Weather;

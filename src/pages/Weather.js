import React from "react";
import SearchBar from "../components/SearchBar";
const Weather = () => {
  return (
    <div className="weather-page">
      <SearchBar placeholder={"Enter your city name"} />
    </div>
  );
};

export default Weather;

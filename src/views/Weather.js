import React, {useEffect, useState} from "react";

import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";
import WeatherCard from "../components/WeatherCard";
import { WiRain } from "react-icons/wi";

const API_Key = "94fb7ee2c7503834b6f980b1f6f2936c";
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}`

const Weather = () => {

  const [weatherDescription, setWeatherDescription] = useState("");
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [currentTemperature, setCurrentTemperature] = useState(undefined);
  const [maxTemperature, setMaxTemperature] = useState(undefined);
  const [minTemperature, setMinTemperature] = useState(undefined);
  const [weatherId, setWeatherId] = useState(undefined);


  const toCelsius = temp => Math.floor(temp - 273.15);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCountryName(data.sys.country);
        setCityName(data.name);
        setWeatherDescription(data.weather[0].description);
        setCurrentTemperature(toCelsius(data.main.temp));
        setMaxTemperature(toCelsius(data.main.temp_max));
        setMinTemperature(toCelsius(data.main.temp_min));
        setWeatherId(data.weather[0].id);
      })
  },[]);

  const { loading, user } = useAuth0();
  if (loading || !user) {
    return <Loading/>;
  };

  return (
    <>
    <h1 className="title">JimmyCheng's Weather Report</h1>
    <WeatherCard
      cityName = {cityName}
      countryName = {countryName}
      weatherDescription = {weatherDescription}
      currentTemperature = {currentTemperature}
      maxTemperature = {maxTemperature}
      minTemperature = {minTemperature}
      weatherId = {weatherId}
    />
    </>
  );
};

export default Weather;
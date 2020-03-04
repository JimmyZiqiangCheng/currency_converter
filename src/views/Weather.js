import React, {useEffect, useState} from "react";

import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";
import WeatherCard from "../components/WeatherCard";
import WeatherForm from "../components/WeatherForm";


const API_Key = "94fb7ee2c7503834b6f980b1f6f2936c";

let SAMPLE_URL, BASE_URL;
if(process.env.NODE_ENV === 'production') {
  SAMPLE_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}`;
  BASE_URL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
} else {
  SAMPLE_URL = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}`;
  BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
}


const Weather = () => {

  const [weatherDescription, setWeatherDescription] = useState("");
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [currentTemperature, setCurrentTemperature] = useState(undefined);
  const [maxTemperature, setMaxTemperature] = useState(undefined);
  const [minTemperature, setMinTemperature] = useState(undefined);
  const [weatherId, setWeatherId] = useState(undefined);
  const [currentCity, setCurrentCity] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const [error, setError] = useState(false);
  const [isInit, setIsInit] = useState(false);


  const toCelsius = temp => Math.round(temp - 273.15);

  useEffect(() => {
    if (cityName.length!=0 && countryName.length!=0){
      fetch(`${BASE_URL}?q=${currentCity},${currentCountry}&appid=${API_Key}`)
        .then(res => {
          console.log(res);
          if(!res.ok){
            setError(true);
            return;
          }
          return res.json();
        })
        .then(data => {
          setWeatherDescription(data.weather[0].description);
          setCurrentTemperature(toCelsius(data.main.temp));
          setMaxTemperature(toCelsius(data.main.temp_max));
          setMinTemperature(toCelsius(data.main.temp_min));
          setWeatherId(data.weather[0].id);
          setError(false);
          setIsInit(true);
        })
        .catch(err => {
          console.log(err);
          setError(true);
        })
      }
  },[cityName, countryName]);

  const { loading, user } = useAuth0();
  if (loading || !user) {
    return <Loading/>;
  };

  const handleCityCountryChange = event =>{
    event.preventDefault();
    setCityName(event.target.elements.city.value);  
    setCountryName(event.target.elements.country.value);  
  }

  const handleCityChange = event =>{
    event.preventDefault();
    setCurrentCity(event.target.value);
  }

  const handleCountryChange = event =>{
    event.preventDefault();
    setCurrentCountry(event.target.value);
  }

  return (
    <>
    <h1 className="title">JimmyCheng's Weather Report</h1>
    <WeatherForm 
      currentCityName = {currentCity}
      currentCountryName = {currentCountry}
      handleSubmit = {handleCityCountryChange}
      handleCityChange = {handleCityChange}
      handleCountryChange = {handleCountryChange}
    />
    <WeatherCard
      cityName = {cityName}
      weatherDescription = {weatherDescription}
      currentTemperature = {currentTemperature}
      maxTemperature = {maxTemperature}
      minTemperature = {minTemperature}
      weatherId = {weatherId}
      error = {error}
      isInit = {isInit}
    />
    </>
  );
};

export default Weather;
import React, { useContext } from "react";
import styles from "../styles/weatherPanel.module.scss";
import { WeatherContext } from "../providers/weatherProvider/WeatherProvider";
import { useToggle } from "../utils/customHooks";

const WeatherPanel = () => {
  const { current, forecast, location } = useContext(WeatherContext).weather;
  const { name, region } = location;
  const { forecastday } = forecast;
  const [celsius, toggleCelsius] = useToggle();

  return (
    <div className={styles.weatherPanel}>
      <h1 className="location">{`${name}, ${region}`}</h1>
      <div className="weather-detail">
        <div className="weather-current" onClick={toggleCelsius}>
          <img
            className="current-weather-icon"
            src={current.condition.icon}
            alt="current-weather"
          />
          <p className="current-description">{current.condition.text}</p>
          {celsius ? (
            <p className="current-temp">{`now: ${current.temp_c}°C`}</p>
          ) : (
            <p className="current-temp">{`now: ${current.temp_f}°F`}</p>
          )}
        </div>
        <div className="weather-forecast">
          {forecastday &&
            forecastday.map((day, index) => {
              return (
                <div
                  className="forecast-day"
                  key={index}
                  onClick={toggleCelsius}
                >
                  <h2 className="date"> {day.date} </h2>
                  <img
                    className="forecast-weather-icon"
                    src={day.day.condition.icon}
                    alt="forecast-weather"
                  />
                  <p className="weather-description">
                    {day.day.condition.text}
                  </p>
                  {celsius ? (
                    <p className="low-temp">{`low: ${day.day.mintemp_c}°C`}</p>
                  ) : (
                    <p className="low-temp">{`low: ${day.day.mintemp_f}°F`}</p>
                  )}
                  {celsius ? (
                    <p className="high-temp">{`high: ${day.day.maxtemp_c}°C`}</p>
                  ) : (
                    <p className="high-temp">{`high: ${day.day.maxtemp_f}°F`}</p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WeatherPanel;

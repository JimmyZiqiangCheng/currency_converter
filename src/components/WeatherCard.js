import React from 'react';
import {Card} from "react-bootstrap";

import { WiCloud } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiShowers } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiFog } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";


export default function WeatherCard(props) {
  const {
    cityName,
    countryName,
    currentTemperature,
    weatherDescription,
    maxTemperature,
    minTemperature,
    weatherId
  } = props
  console.log(props)
  return (
    <div className="weatherCard">
      <Card style={{ width: '28rem', border: 0}}>
        <Card.Body>
          <Card.Title>{cityName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{countryName}</Card.Subtitle>
          <Card.Text>
            {weatherId<=200 && <WiDaySunny size={120}/>}
            {weatherId>200 && weatherId<=300 && <WiThunderstorm size={120}/>}
            {weatherId>300 && weatherId<=400 && <WiShowers size={120}/>}
            {weatherId>400 && weatherId<=600 && <WiRain size={120}/>}
            {weatherId>600 && weatherId<=700 && <WiSnow size={120}/>}
            {weatherId>700 && weatherId<=800 && <WiFog size={120}/>}
            {weatherId>800 && <WiCloud size={120}/>}
            <h4 className="currentWeather">current: {currentTemperature}</h4>
            <p>high: {maxTemperature},   low: {minTemperature} </p>
            <p>{weatherDescription}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
import React from 'react';
import {Card, Alert} from "react-bootstrap";

import { WiCloud } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiShowers } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiFog } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";

const WeatherCard = props => {
  const {
    cityName,
    currentTemperature,
    weatherDescription,
    maxTemperature,
    minTemperature,
    weatherId,
    error,
    isInit
  } = props
  if (error) {
    return (
      <Alert className="alertMessage" variant='danger'>
        Please type in a correct city and country combo such as "Tokyo, Japan"
      </Alert>
    );
  }
  if (isInit) {
    return (
      <div className="weatherCard">
        <Card style={{ width: '28rem', border: 0}}>
          <Card.Body>
            <Card.Title>{cityName}</Card.Title>
            <Card.Text>
              {weatherId===800 && <WiDaySunny size={120}/>}
              {weatherId>200 && weatherId<=300 && <WiThunderstorm size={120}/>}
              {weatherId>300 && weatherId<=400 && <WiShowers size={120}/>}
              {weatherId>400 && weatherId<=600 && <WiRain size={120}/>}
              {weatherId>600 && weatherId<=700 && <WiSnow size={120}/>}
              {weatherId>700 && weatherId<800 && <WiFog size={120}/>}
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
  return (
    <p className="alertMessage" variant='info'>
      Please enter city and country name to start, such as "Toronto, Canada" 
    </p>
  )
}

export default WeatherCard;
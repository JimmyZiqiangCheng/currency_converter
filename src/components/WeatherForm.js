import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';


const WeatherForm = props =>{
  const {
    currentCityName,
    currentCountryName,
    handleSubmit,
    handleCityChange,
    handleCountryChange,
  } = props

  return(
    <div>
      <Form className="weatherForm" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control 
              type="text"
              name="city"
              placeholder="City name"
              value={currentCityName}
              onChange={handleCityChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control 
              type="text"
              name="country"
              placeholder="Country name"
              value={currentCountryName}
              onChange={handleCountryChange}
            />
          </Form.Group>
        </Form.Row>

        <style type="text/css">
        {`
        .btn-flat {
          background-color: rgb(54, 59, 56);
          color: white;
        }
        `}
      </style>

        <Button variant="flat" type="submit">
          Get Weather
        </Button>
      </Form>
    </div>
  );
}

export default WeatherForm;
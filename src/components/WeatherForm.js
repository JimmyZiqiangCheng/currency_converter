import React from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap';


const WeatherForm = props =>{

  return(
    <div>
      <Form className="weatherForm">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control placeholder="City name"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control placeholder="Country name"/>
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
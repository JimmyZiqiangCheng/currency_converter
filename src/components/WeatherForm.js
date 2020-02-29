import React from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap';


const WeatherForm = props =>{

  return(
    <div className="weatherForm">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control placeholder="City name"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control placeholder="Country name"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Control placeholder="postal code" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default WeatherForm;
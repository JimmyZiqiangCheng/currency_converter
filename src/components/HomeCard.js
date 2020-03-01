import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

const HomeCard = props => {
  const {
    imgsrc,
    title,
    content,
    buttonText,
    dest
  } = props

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={imgsrc} 
      />
      <Card.Body>
      <Card.Title> {title} </Card.Title>
        <Card.Text style={{height:'3rem'}}>{content}</Card.Text>
        <style type="text/css">
          {`
          .btn-flat {
            background-color: rgb(54, 59, 56);
            color: white;
            padding-left: 2rem;
            padding-right: 2rem;
          }
          `}
        </style>
        <Button variant="flat" as={Link} to={dest}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default HomeCard;
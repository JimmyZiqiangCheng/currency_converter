import React from 'react';
import {Card, Button} from 'react-bootstrap';

const HomeCard = props => {
  const {
    imgsrc,
    title,
    content,
    buttonText
  } = props

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../assets/coin.jpg"  fluid/>
      <Card.Body>
      <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  )
}

export default HomeCard;
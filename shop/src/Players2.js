import React from 'react'
import Card from "react-bootstrap/Card";


const Players2 = ({name,team,nationality,jerseyNumber,age,imageUrl}) => {
  return (
    <Card  style="width: 18rem;, margin: 10px;" > 
    <Card.Img variant="top" src={imageUrl}/>
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality:Card{nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age:{age}</Card.Text>
    </Card.Body>






    </Card>
  );
};


export default Players2;

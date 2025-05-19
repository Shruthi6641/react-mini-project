import React from 'react'
import {Card,Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const Recipe = ({singleRecipe}) => {
    const navigate=useNavigate()
    // console.log(singleRecipe)
  return (
    <div >
    <Card style={{height:"auto"}}>
      <Card.Img variant="top" src={singleRecipe.image} />
      <Card.Body>
        <Card.Title>{singleRecipe.name}</Card.Title>
        <Card.Title>⭐️ {singleRecipe.rating}</Card.Title>
      
        <Button variant="primary" onClick={()=>{navigate(`/recipes/${singleRecipe.id}`)}}>View Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Recipe

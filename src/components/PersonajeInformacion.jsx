import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


function PersonajeInformacion({isLoading,informacion}) {
    return isLoading ? <h1>Loading</h1> :
        <div className="card bg-dark text-black" style={{ width: '14rem' }}  >
            <img variant="top" src={informacion.image.url} height="220px"  />
  
  
    <ListGroup className="list-group-flush text-center">
    <ListGroup.Item>Inteligencia: {informacion.powerstats.intelligence}</ListGroup.Item>
    <ListGroup.Item>Fuerza: {informacion.powerstats.strength}</ListGroup.Item>
    <ListGroup.Item>Velocidad: {informacion.powerstats.speed}</ListGroup.Item>
    <ListGroup.Item>Durabilidad: {informacion.powerstats.durability}</ListGroup.Item>
    <ListGroup.Item>Fuerza: {informacion.powerstats.power}</ListGroup.Item>
    <ListGroup.Item>Combate: {informacion.powerstats.combat}</ListGroup.Item>
  </ListGroup>
    <Button variant="primary">Agregar a Favoritos</Button>
  
  </div>
    
}

export default PersonajeInformacion

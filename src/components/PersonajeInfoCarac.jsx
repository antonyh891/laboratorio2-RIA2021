import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


function PersonajeInfoCarac({isLoading,informacion}) {
    return isLoading ? <h1>Loading</h1> :
        <Card border="light" className="card bg-dark text-black" style={{ width: '14rem' }}  >
            <img variant="top" src={informacion.image.url} height="300px"  />  
  
            <ListGroup className="list-group-flush text-center" >
            <ListGroup.Item className="bg-dark text-white">Inteligencia: {informacion.powerstats.intelligence}</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">Fuerza: {informacion.powerstats.strength}</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">Velocidad: {informacion.powerstats.speed}</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">Durabilidad: {informacion.powerstats.durability}</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">Fuerza: {informacion.powerstats.power}</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">Combate: {informacion.powerstats.combat}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary">Agregar a Favoritos</Button>
  
        </Card>
 }

export default PersonajeInfoCarac

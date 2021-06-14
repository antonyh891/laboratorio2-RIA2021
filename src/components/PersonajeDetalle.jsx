import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'


function PersonajeDetalle({isLoading,informacion}) {
     return isLoading ? <Spinner animation="border" /> :
     
       <Card border="light" className ='imagenInformacion bg-dark text-white' >
          <Card.Body>
            <Card.Title>
              <h1>
                <strong>{informacion.name}</strong>
              </h1>     
            </Card.Title>
            <Card.Subtitle>
              <p>
                <strong>Alias: {informacion.biography.aliases}</strong>
              </p>
            </Card.Subtitle>
            <Card.Text>
              <p>Publicado por: {informacion.biography.publisher}</p>
              <p>Orientacion: {informacion.biography.alignment}</p> 
              <p>Genero: {informacion.appearance.gender}</p>
              <p>Raza: {informacion.appearance.race}</p>
              <p>Altura: {informacion.appearance.height}</p>
              <p>Peso: {informacion.appearance.weight}</p>
              <p>Ocupacion: {informacion.work.occupation}</p>
              <p>Familia: {informacion.connections.relatives}</p>
            </Card.Text>        
        </Card.Body>
      </Card>

   
    
}

export default PersonajeDetalle
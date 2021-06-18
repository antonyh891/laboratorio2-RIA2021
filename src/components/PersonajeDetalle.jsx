import React from 'react'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'


function PersonajeDetalle({isLoading,informacion}) {
     return isLoading ? <h1 className="text-primary">Cargando<Spinner animation="border" className="text-primary" /></h1> :
     
       <Card border="light" className ='bg-dark text-white' style ={{opacity: 0.9}} >
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
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'


const Tarjeta= ({item}) => { 
    return (
    <Container>
        <Card bg='dark'
          key={item.id}
         // border="success"
          border="light"
          text='white'
          style={{ width: '10rem'}}
          className="mb-2">
          <Card.Header align="center">{item.name} </Card.Header>
          <Card.Img variant="top" src={item.image.url} />
        </Card>
      <div className="botonCard">
        <Link to={`/personaje/${item.id}`}> <Button variant ="dark" size = "10px">
          Ver mas</Button></Link>
      </div>

      </Container> 


    )
}

export default Tarjeta

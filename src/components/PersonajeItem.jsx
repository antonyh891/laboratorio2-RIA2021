import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const PersonajeItem = ({item}) => {
    return (
      <div> 
        <Card bg='dark'
        key={item.id}
        border="success"
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
</div>

    )
}

export default PersonajeItem

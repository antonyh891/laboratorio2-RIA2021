import React from 'react';
import Tarjeta from './Tarjeta'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const PersonajeListado = ({items,isLoading}) => {
    
    return isLoading ? <h1>Loading</h1> :
    <Container>
        <Row className = "justify-content-center">
        {
            items.map(item=>(
                
        <Col xs={"auto"} >
                <Tarjeta key={item.id} item={item}></Tarjeta>
                </Col>
       
            ))
        }
         </Row>
        
    </Container>
}

export default PersonajeListado

import React from 'react';
import Tarjeta from './Tarjeta'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'


const PersonajeListado = ({items,isLoading}) => {
    
    return isLoading ? <Spinner animation="border" /> :
    <Container className = "justify-content-center">
        <Row className = "justify-content-center">
        {
            items.map(item=>(
                
        <Col className = "justify-content-center" xs={"auto"}  lg={3} >
                <Tarjeta key={item.id} item={item}></Tarjeta>
                </Col>
       
            ))
        }
         </Row>
        
    </Container>
}

export default PersonajeListado

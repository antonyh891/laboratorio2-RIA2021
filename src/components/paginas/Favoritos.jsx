import { useContext } from 'react';
import NavBar from '../navegacion/NavBar'
import { FavoritosStateContext } from '../../FavoritosContext'
import Tarjeta from '../Tarjeta'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Favoritos() {
    const favoritos = useContext(FavoritosStateContext)
    
    console.log("esta",favoritos)
    return (
       
        <div>   
        <NavBar  />
        <Container>
             
        <Row className = "justify-content-center">
        {
            favoritos.map(item=>(
                <Col xs={"auto"} >
                <Tarjeta key={item.informacion.id} item={item.informacion}></Tarjeta>
                </Col>
            ))
        }
         </Row>
        
    </Container>
    </div>
    
    )
}

export default Favoritos
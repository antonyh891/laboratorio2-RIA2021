
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PersonajeInfoCarac from './PersonajeInfoCarac';
import PersonajeDetalle from './PersonajeDetalle';
import NavBar from './navegacion/NavBar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Personaje = () => {
    const {id} =  useParams()
    const[isLoading,setLoading] = useState(true)
    const[personaje,setPersonaje] = useState()
    useEffect(()=>{
    const fetch = async()=>{
          const result = await axios(`/api/10222942978676608/${id}`)
              if (result.data.response == "success"){  
                console.log(result.data)  
                setPersonaje(result.data);
                setLoading(false)
              }
              else{
                
              }  
                
          }
             
         fetch() 
        },[])
    return (
      <div>
        <NavBar />
        <Container className=" prueba justify-content-center">
          <Row >
            <Col className="text justify-content-left" ><PersonajeInfoCarac isLoading={isLoading} informacion={personaje} /></Col>
            <Col className="text justify-content-left" ><PersonajeDetalle isLoading={isLoading} informacion={personaje} /></Col>
           </Row>
        </Container>
      </div>
  
    )
}

export default Personaje


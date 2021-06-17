
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PersonajeInfoCarac from './PersonajeInfoCarac';
import PersonajeDetalle from './PersonajeDetalle';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Personaje = () => {
    const {id} =  useParams()
    const[isLoading,setLoading] = useState(true)
    const[personaje,setPersonaje] = useState()
    useEffect(()=>{
    const fetch = async()=>{
          const result = await axios(`https://superheroapi.com/api/10222942978676608/${id}`)
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
        <Container className="justify-content-center" style={{padding: '15px'}}>
          <Row className = "centrado justify-content-center">
            <Col xs={8}  className="col-xl-3 col-lg-3 col-md-4  justify-content-center" ><PersonajeInfoCarac isLoading={isLoading} informacion={personaje} /></Col>
            <Col xs={"auto"} style={{padding: '50px'}} className="col-xl-9 col-lg-8 col-xs-5 col-md-8 justify-content-center" ><PersonajeDetalle isLoading={isLoading} informacion={personaje} /></Col>
           </Row>
        </Container>
  
    )
}

export default Personaje


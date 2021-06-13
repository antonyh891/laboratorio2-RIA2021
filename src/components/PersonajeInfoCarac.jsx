import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { FavoritosSetStateContext, FavoritosStateContext,FavoritosEliminarContext } from '../FavoritosContext'


function PersonajeInfoCarac({isLoading,informacion}) {
  const setFavoritos = useContext(FavoritosSetStateContext) 
  const favoritos = useContext(FavoritosStateContext)
  const eliminarFavoritos = useContext(FavoritosEliminarContext)
  const[ver,setVer] = useState(true)
  const[indice,setIndice] = useState()
  
  useEffect(() => {
    if (favoritos.length >0 && isLoading==false){
      for (let i in favoritos){
        if (favoritos[i].informacion.id == informacion.id){
          setVer(false)
          setIndice(i)
        }
      }
    }
  });
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
  
  {
  ver ?
  <Button variant ="primary" onClick={() => setFavoritos({informacion}) } >
         Agregar a Favoritos</Button>
  : <Button variant ="primary" onClick={() => eliminarFavoritos({indice}, setVer(true)) } >
  Quitar de Favoritos</Button> 
}
    
        </Card>
 }

export default PersonajeInfoCarac

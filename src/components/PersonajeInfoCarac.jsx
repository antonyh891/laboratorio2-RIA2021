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
        <div className="card bg-dark text-black" style={{ width: '14rem' }}  >
            <img variant="top" src={informacion.image.url} height="300px"  />
  
  
    <ListGroup className="list-group-flush text-center">
    <ListGroup.Item>Inteligencia: {informacion.powerstats.intelligence}</ListGroup.Item>
    <ListGroup.Item>Fuerza: {informacion.powerstats.strength}</ListGroup.Item>
    <ListGroup.Item>Velocidad: {informacion.powerstats.speed}</ListGroup.Item>
    <ListGroup.Item>Durabilidad: {informacion.powerstats.durability}</ListGroup.Item>
    <ListGroup.Item>Fuerza: {informacion.powerstats.power}</ListGroup.Item>
    <ListGroup.Item>Combate: {informacion.powerstats.combat}</ListGroup.Item>
  </ListGroup>
  {
  ver ?
  <Button variant ="primary" onClick={() => setFavoritos({informacion}) } >
         Agregar a Favoritos</Button>
  : <Button variant ="primary" onClick={() => eliminarFavoritos({indice}, setVer(true)) } >
  Quitar de Favoritos</Button> 
}
  </div>
    
}

export default PersonajeInfoCarac

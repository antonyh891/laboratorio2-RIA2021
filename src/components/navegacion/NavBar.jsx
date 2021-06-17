import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { FavoritosStateContext } from '../../FavoritosContext'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'


function NavBar() {
    
    return (
        
        <>
         
  <Navbar bg="dark" className="navbar" variant="dark">
  <Link to to="/"><Navbar.Brand>
      <img
        src='https://media.istockphoto.com/vectors/vector-superhero-silhouette-with-sunburst-effect-background-vector-id1162040662?k=6&m=1162040662&s=612x612&w=0&h=stfa6A3n_qxpQV5UMzOBOQKebtP0GLyY4VdH6xOeM8I='
        width="40"
        height="40"
        className="circular--square d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand></Link>
    <Nav className=" mr-auto">
    <Link to to="/"><a className="nav-link" aria-current="page">Inicio</a></Link>
    <Link to to="/favoritos"><a className="nav-link" aria-current="page">Favoritos</a></Link>
    </Nav>
    
  </Navbar>  
</>
        
    )
}

export default NavBar

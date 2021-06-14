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
         
  <Navbar bg="dark" variant="dark">
  
    <Nav className="mr-auto">
    <Link to to="/"><a className="nav-link" aria-current="page">Inicio</a></Link>
    <Link to to="/favoritos"><a className="nav-link" aria-current="page">Favoritos</a></Link>
    </Nav>
    
  </Navbar>  
</>
        
    )
}

export default NavBar

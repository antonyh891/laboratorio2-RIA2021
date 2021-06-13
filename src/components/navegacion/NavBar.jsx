import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { FavoritosStateContext } from '../../FavoritosContext'


function NavBar() {
   
const listadoFavoritos= useContext(FavoritosStateContext) 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <a className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to="/"> <a className="nav-link" aria-current="page" >Inicio</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link to={{
                                        pathname: `/favoritos`,
                                        state: {
                                        listadoFavoritos : [listadoFavoritos]
                                        }, 
                                     }}> <a className="nav-link" aria-current="page" >Favoritos</a></Link>
                            </li>
                        </ul>
                        </div>
                        </div>
                       
                    
                
            </nav>
        </div>
    )
}

export default NavBar

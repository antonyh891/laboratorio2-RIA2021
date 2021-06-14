import { useState, useContext,createContext } from 'react';
import './App.css';
import Inicio from './components/paginas/Inicio'
import Favoritos from './components/paginas/Favoritos'
import Personaje from './components/Personaje'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {FavoritosStateContext, FavoritosSetStateContext, FavoritosEliminarContext} from './FavoritosContext'
import Container from 'react-bootstrap/Container'
import NavBar from './components/navegacion/NavBar'

function App() {
  const [favoritos, setFavoritos] = useState([])

  const AgregarFavorito = (favorito)  => {
    if (favoritos.length > 0){
    setFavoritos([...favoritos, favorito])
    }else{
      setFavoritos([favorito])
    }
    console.log("operacion:",favoritos)
}

const EliminarFavorito = indice => {
  const auxFavoritos = [...favoritos]
  auxFavoritos.splice(indice.indice, 1)
  setFavoritos(auxFavoritos)
  
}
      return (
        <Router>
        <NavBar />
    <Container>
      
    <FavoritosStateContext.Provider value={favoritos}>
      <FavoritosSetStateContext.Provider value={AgregarFavorito}>
        <FavoritosEliminarContext.Provider value={EliminarFavorito}>
          
           
            <Switch>
                <Route exact path='/personaje/:id'>
                    <Personaje />
                </Route>
                <Route exact path='/'>
                    <Inicio />
                </Route>
                <Route exact path='/favoritos'>
                    <Favoritos />
                </Route>
            </Switch>
         
          </FavoritosEliminarContext.Provider>
        </FavoritosSetStateContext.Provider>
      </FavoritosStateContext.Provider>
      </Container>
      </Router>
  );

}

export default App;

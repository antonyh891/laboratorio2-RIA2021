import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Cabezal from './components/Cabezal';
import PersonajeListado from './components/PersonajeListado';
import Buscar from './components/Buscar';
import NavBar from './components/navegacion/NavBar'
import Inicio from './components/paginas/Inicio'
import Personaje from './components/Personaje'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import InformacionInfoCarac from './components/PersonajeInfoCarac';
import PersonajeDetalle from './components/PersonajeDetalle';

const token =  "10222942978676608"

function App() {
  
      return (
    
   
     <Router>
        <Switch>
          <Route exact path='/personaje/:id' exact component={Personaje}></Route>
          <Route exact path='/inicio' exact component={Inicio}></Route>
        </Switch>
      </Router>
      
    
  );

}

export default App;

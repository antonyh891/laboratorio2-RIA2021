import { useEffect, useState } from 'react';
import axios from 'axios'
import PersonajesTabla from '../PersonajeListado';
import Buscar from '../Buscar';
import NavBar from '../navegacion/NavBar'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import InformacionPersonaje from '../Personaje';

function Inicio() {

    const[items,setItems] = useState([])
    const[isLoading,setLoading] = useState(true)
    const [query,setQuery] = useState('')
    const ids = [644 , 645, 646]
    var resultado=[]
    useEffect(()=>{
      const fetch = async()=>{
        if(query===''){
            setItems([])
        }else{ 
          const result = await axios(`/api/10222942978676608/search/${query}`)
              if (result.data.response == "success"){  
                console.log(result.data.results)  
                setItems(result.data.results)
                setLoading(false)
              }
              else{
                setItems([])
              }  
                
          }
        }      
         fetch() 
        },[query])      
    if (items.length > 0){
  
    return (

        <div>
        <NavBar search={(q)=>setQuery(q)} />
    <div className="container">
    <Buscar search={(q)=>setQuery(q)}></Buscar>
     
        <PersonajesTabla items={items} isLoading={isLoading} />
        
         
      
      
    </div>
    </div>
  );
} else{
  return (
    <div> 
     
         <NavBar search={(q)=>setQuery(q)} />
      
     <div className="container">
       
      <Buscar search={(q)=>setQuery(q)}></Buscar>
 
     </div>
     </div> 
   );
}
            
}

export default Inicio

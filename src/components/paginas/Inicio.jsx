import { useEffect, useState, useContext,createContext } from 'react';
import axios from 'axios'
import PersonajesListado from '../PersonajeListado';
import Buscar from '../Buscar';
import NavBar from '../navegacion/NavBar'
import Container from 'react-bootstrap/Container'


function Inicio() {
    
    const[items,setItems] = useState([])
    const[isLoading,setLoading] = useState(true)
    const [query,setQuery] = useState('')
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
        <NavBar/>
    <Container>
    <Buscar search={(q)=>setQuery(q)}></Buscar>
     
        <PersonajesListado items={items} isLoading={isLoading} />
        
         
      
      
    </Container>
    </div>
   
  );
} else{
  return (
    <div> 
     
         <NavBar  />
      
     <Container>
       
      <Buscar search={(q)=>setQuery(q)}></Buscar>
 
     </Container>
     </div>
   );
}
            
}

export default Inicio

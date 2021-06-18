import { useEffect, useState, useContext,createContext } from 'react';
import axios from 'axios'
import PersonajesListado from '../PersonajeListado';
import Buscar from '../Buscar';
import Pagination from '../Pagination'
import Container from 'react-bootstrap/Container'


function Inicio() {
    
    const[items,setItems] = useState([])
    const[isLoading,setLoading] = useState(true)
    const [query,setQuery] = useState('')
    const [paginaActual, setPaginaActual] = useState(1);
    const [itemsPorPagina] = useState(10);
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
        
                // Obtener items actuales
  const indexUltimaPosicion = paginaActual * itemsPorPagina;
  const indexPrimeraPosicion = indexUltimaPosicion - itemsPorPagina;
  const itemsActuales = items.slice(indexPrimeraPosicion, indexUltimaPosicion);

   // Cambiar pagina
   const paginate = pageNumber => setPaginaActual(pageNumber);
       

    if (items.length > 0){
  
    return (
        
       
    <Container style={{padding: '15px'}}>
    <Buscar search={(q)=>setQuery(q)}></Buscar>
     
        <PersonajesListado items={itemsActuales} isLoading={isLoading} />
        <Pagination
        postsPerPage={itemsPorPagina}
        totalPosts={items.length}
        paginate={paginate}
      />
        
    </Container>
    
   
  );
} else{
  return (
     
     
        
      
     <Container style={{padding: '15px'}}>
       
      <Buscar search={(q)=>setQuery(q)}></Buscar>
 
     </Container>
    
   );
}
            
}

export default Inicio

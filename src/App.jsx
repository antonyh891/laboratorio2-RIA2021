import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Cabezal from './components/Cabezal';
import PersonajesTabla from './components/PersonajesTabla';
import Buscar from './components/Buscar';

const token =  "10222942978676608"

function App() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')
  const ids = [644 , 645, 646]
  var resultado=[]
  useEffect(()=>{
    const fetch = async()=>{
      if(query===''){
          
      }else{ 
        const result = await axios(`/api/10222942978676608/search/${query}`)
              
              console.log(result.data.results)  
              setItems(result.data.results)
            
              setLoading(false)
        }
      }      
       fetch() 
      },[query])      
  return (
    <div className="container">
     <Cabezal />
     <Buscar search={(q)=>setQuery(q)}></Buscar>
     <PersonajesTabla items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;

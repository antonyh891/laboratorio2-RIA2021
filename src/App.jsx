import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Cabezal from './components/Cabezal';
import PersonajesTabla from './components/PersonajesTabla';

const token =  "10222942978676608"

function App() {
  const[items,setItems] = useState()
  const[isLoading,setLoading] = useState(true)

  useEffect(()=>{
    const fetch = async()=>{
    
          const result = await axios(`/api/10222942978676608/644`)
          console.log(result.data)
          setItems(result.data)
          setLoading(false)
          
        }
       fetch() 
  },[])      
  return (
    <div className="container">
     <Cabezal />
     <PersonajesTabla items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;

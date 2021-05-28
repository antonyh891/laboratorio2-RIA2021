import React from 'react'
import PersonajeItem from './PersonajeItem'

const PersonajesTabla = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            
            
                <PersonajeItem key={items.id} item={items}></PersonajeItem>
            
        }
    </section>
}

export default PersonajesTabla

import React from 'react'
import PersonajeItem from './PersonajeItem'

const PersonajesTabla = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <PersonajeItem key={item.id} item={item}></PersonajeItem>
            ))
        }
    </section>
}

export default PersonajesTabla

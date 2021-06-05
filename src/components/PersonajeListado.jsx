import React from 'react'
import Tarjeta from './Tarjeta'


const PersonajeListado = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <Tarjeta key={item.id} item={item}></Tarjeta>
            ))
        }
    </section>
}

export default PersonajeListado

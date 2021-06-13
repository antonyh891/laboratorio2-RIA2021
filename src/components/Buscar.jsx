import React, {useState} from 'react'


const Buscar = ({search}) => {
    

    const onSearch= (q)=>{
        search(q)
    }

    return (
        <section className="search">
            <form>
                <input type="text"
                className="form-control"
                placeholder="Find a character"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Buscar
import React, {useState} from 'react'


const Buscar = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <section className="search" border="light">
            <form>
                <input type="text"               
                className="form-control"
                placeholder="Busque un personaje"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/>
            </form>
        </section>
    )
}

export default Buscar
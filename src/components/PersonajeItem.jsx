import React from 'react'

const PersonajeItem = ({item}) => {
    return (
        <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={item.image.url}  />
        </div>
        <div className='content-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Description:</strong> {item.biography.publisher}
            </li>
           
          </ul>
        </div>
      </div>
    </div>
    )
}

export default PersonajeItem

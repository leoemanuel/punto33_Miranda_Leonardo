import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({prod}) => {
  return (
    <div key={prod.id} className="card m-3" style={{ width: '18rem' }}>
      <img src={prod.img} alt={prod.name}/>
      <div className="card-body">
        <h3 className="card-title">{prod.name}</h3>
        <p className="card-text">Precio $: {prod.price}</p>
        <p className="card-text">{prod.desc}</p>
        <ItemCount stock = "5"/>
      </div>          
    </div>
  )
}

export default Item
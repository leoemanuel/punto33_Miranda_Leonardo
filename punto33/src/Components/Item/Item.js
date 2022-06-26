import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({prod}) => {
  return (
    <div key={prod.id} className="card m-3" style={{ width: '18rem' }}>
      <img src={prod.img} alt={prod.name}/>
      <div className="card-body">
        <h3 className="card-title text-center">{prod.name}</h3>
        <Link to={`/detail/${prod.id}`} className='btn btn-secondary mx-5'>LO QUIERO!</Link>
      </div>          
    </div> 
  )
}

export default Item
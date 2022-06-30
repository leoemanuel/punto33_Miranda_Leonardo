import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import {BsFillTrashFill} from 'react-icons/bs'

export const CartView = () => {

  const {carrito, vaciarCarrito, removerDelCarrito} = useContext(CartContext)

  return (
    <div className='container my-5'>
        <h2>Cart View</h2>
        <hr/>
        <section className="card m-3" style={{ width: '12rem' }}>
          {
            carrito.map((prod)=>(
              <div className="card-body">
                <h3 className="card-title">{prod.name}</h3>
                <p className="card-text">Precio: ${prod.price}</p>
                <p className="card-text">Cantidad: {prod.counter}</p>
                <button className='btn btn-danger' onClick={()=>{removerDelCarrito(prod.id)}}>
                <BsFillTrashFill/></button>
              </div>
            ))
          }
        </section>
        <hr/>
        <div>
          <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar</button>
          <button className='btn btn-success mx-2'>Finalizar</button>
        </div>
        
    </div>
  )
}


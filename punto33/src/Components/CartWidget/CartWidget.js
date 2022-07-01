import React, { useContext } from 'react'
import {BsCartPlus} from 'react-icons/bs'
import { CartContext } from '../CartContext/CartContext'
import "./CartWidget.css"


export const CartWidget = () => {

  const {totalCantidad, carrito} = useContext(CartContext)
  console.log(totalCantidad)

  return (
    <div className={carrito.length === 0 ? 'hidden widget': 'widget'}>
        <BsCartPlus className='CartWidget'/>
        <span>{totalCantidad()}</span>
    </div>
  )
}


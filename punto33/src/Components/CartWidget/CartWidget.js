import React, { useContext } from 'react'
import {BsCartPlus} from 'react-icons/bs'
import { CartContext } from '../CartContext/CartContext'
import "./CartWidget.css"


export const CartWidget = () => {

  const {totalCantidad} = useContext(CartContext)
  console.log(totalCantidad)

  return (
    <div>
        <BsCartPlus className='CartWidget'/>
        <span>{totalCantidad()}</span>
    </div>
  )
}
import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


function ItemCount({stock, setCounter, counter, onAdd}) {
    

    const incrementar = () =>{
        if(stock>counter){
            setCounter(counter+1);
        }
    }

    const decrementar = () =>{
        if(counter>0){
            setCounter(counter -1)
        }
        
    }


  return (
    <div>
        <div className='d-flex justify-content-center'>
        <Button variant="primary m-1" onClick={decrementar} >-</Button>
        <p className='mx-2'>{counter}</p>
        <Button variant="primary m-1" onClick={incrementar} disabled={counter > stock-1}>+</Button>
        </div>
        <hr/>
        <Button variant="secondary" size="lg" onClick={onAdd} className="mx-3">
          Agregar al carrito
        </Button>
    </div>
  )
}

export default ItemCount
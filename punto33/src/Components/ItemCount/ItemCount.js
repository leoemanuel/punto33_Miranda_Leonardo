import React, {useState} from 'react'
import {Button} from 'react-bootstrap'


function ItemCount({stock}) {
    const [counter, setCounter] = useState(1);

    const incrementar = () =>{
        if(stock>counter){
            setCounter(counter+1);
        }
    }

    const decrementar = () =>{
        if(counter>1){
            setCounter(counter -1)
        }
        
    }
    const respuesta =()=>{
        alert(`Has seleccionado ${counter}`)
    }

  return (
    <div>
        <h2>{counter}</h2>
        <div>
        <Button variant="primary m-1" onClick={decrementar} >-</Button>
        <Button variant="primary" onClick={incrementar} disabled={counter > stock-1}>+</Button>
        </div>
        <hr/>
        <Button variant="secondary" size="lg" onClick={respuesta}>
          Agregar al carrito
        </Button>
    </div>
  )
}

export default ItemCount
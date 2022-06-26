import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom';


 export const ItemDetail = ({id,img, name, desc, price, category}) => {

  const [counter, setCounter] = useState(0);
  const [agregado, setAgregado] = useState(false);

  const respuesta =()=>{
    if(counter>0){
      console.log(`Has seleccionado:`,{
        id,
        name,
        price,
        counter
      })
      setAgregado(true)
    }
  }

  return (
    <div key={id} className="card m-3" style={{ width: '18rem' }}>
      <img src={img} alt={name}/>
      <div className="card-body">
        <h3 className="card-title text-center">{name}</h3>
        <p className="card-text">Precio $: {price}</p>
        <p className="card-text">{desc}</p>
      {
        !agregado
        ?<ItemCount 
          stock = "5" 
          counter={counter} 
          setCounter={setCounter}
          onAdd={respuesta}/>
        :<Link to="/cart" className="btn btn-success">Terminar la compra</Link>
      }
      </div>          
    </div> 

  )
}

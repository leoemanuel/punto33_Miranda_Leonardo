import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";


 export const ItemDetail = ({id,img, name, desc, price, category, stock}) => {

  const {agregarAlCarrito, isInCart} = useContext(CartContext)

  const [counter, setCounter] = useState(0);
 

  const respuesta =()=>{
    if(counter>0){
      agregarAlCarrito({
        id,
        name,
        price,
        img,
        counter
      })
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
        !isInCart(id)
        ?<ItemCount 
          stock = {stock}
          counter={counter} 
          setCounter={setCounter}
          onAdd={respuesta}/>
        :<Link to="/cart" className="btn btn-success">Terminar la compra</Link>
      }
      </div>          
    </div> 

  )
}
import ItemCount from "../ItemCount/ItemCount"


 export const ItemDetail = ({id,img, name, desc, price, category}) => {


  return (
    <div key={id} className="card m-3" style={{ width: '18rem' }}>
      <img src={img} alt={name}/>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">Precio $: {price}</p>
        <p className="card-text">{desc}</p>
        <ItemCount stock = "5"/>
      </div>          
    </div> 

  )
}

import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {


  return (
    <div key={item.id} className="card m-3" style={{ width: '18rem' }}>
      <img src={item.img} alt={item.name}/>
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">Precio $: {item.price}</p>
        <p className="card-text">{item.desc}</p>
        <ItemCount stock = "5"/>
      </div>          
    </div> 
  )
}

export default ItemDetail
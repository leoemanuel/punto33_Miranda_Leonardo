import Item from "../Item/Item"
import ItemList from "../ItemList/ItemList"
import {useEffect, useState} from 'react'
import { pedirDatos } from "../helpers/pedirdatos"
import { useParams } from "react-router-dom"



export const ItemListContainer = () => {

    const[loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()
    console.log(catId)

    useEffect(()=>{
        setLoading(true)
        pedirDatos()
            .then((resp)=>{

                if(!catId){
                    setProductos(resp)
                }else{
                    setProductos(resp.filter(prod => prod.category === catId))
                }
                
            })
        .catch((error)=>{
            console.log(error)
            })
        .finally(()=>{
            setLoading(false)
        })
    }, [catId])
    return(
        <>
            {
             loading ? 
             <h2 className="my-5 text-center">Cargando...</h2> :
             <ItemList productos={productos}/>
            }
        </>
    )
}
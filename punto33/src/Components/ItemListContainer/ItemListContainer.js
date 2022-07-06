import ItemList from "../ItemList/ItemList"
import {useEffect, useState} from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"



export const ItemListContainer = () => {
    
    const[loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()
    

    useEffect(()=>{
        setLoading(true)
        const productorsRef = collection(db, 'productos')

        const q = catId ? query((productorsRef), where('category', '==', catId)) : productorsRef

        getDocs(q)
            .then((collection)=>{
                const items = collection.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }))
                setProductos(items)
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


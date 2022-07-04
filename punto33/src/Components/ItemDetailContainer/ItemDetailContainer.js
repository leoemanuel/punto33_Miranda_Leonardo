import React, {useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { Spinners } from '../Spinners/Spinners'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom' 
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from "../../firebase/config"



export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState()
    const [spinner, setSpinner] = useState(false)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
        setSpinner(true)
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((doc)=>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(()=>{
                setLoading(false)
            })
       
    },[itemId])


    return(
        <Container >
            <Row className="justify-content-md-center my-5">
                {
                 loading 
                 ? <Spinners/> 
                 : <ItemDetail {...item}/>
                }
            </Row>
            
        </Container>
    )
}

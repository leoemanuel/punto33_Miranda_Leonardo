import React, {useState, useEffect} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { Spinners } from '../Spinners/Spinners'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../helpers/pedirdatos'



export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState()
    const [spinner, setSpinner] = useState(false)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
        setSpinner(true)
        setLoading(true)

        pedirDatos()
            .then(resp =>{
                setItem( resp.find (prod => prod.id === Number(itemId)))
            })
            .finally(()=>{
                setLoading(false)
            })
    },[])


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

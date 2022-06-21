import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { stock } from '../products/products'
import elFetch from '../products/elFetch'
import { Spinners } from '../Spinners/Spinners'
import { Container, Row } from 'react-bootstrap'



export const ItemDetailContainer = () => {
    
    const [spinner, setSpinner] = useState(false)
    const [item, getItem] = useState({});

    useEffect(() => {
        setSpinner(true)
        elFetch(5000, stock)
        .then((resultado) => {
            getItem(resultado[0])
        })
        .catch((error)=>{
            console.log(error)
            })
        .finally(() => {setSpinner(false)})
    },[])
    return(
        <Container >
            <Row className="justify-content-md-center">
                {
                 spinner ? <Spinners/> : <ItemDetail item={item}/>
                }
            </Row>
            
        </Container>
    )
}

import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <Container className='my-5'>
      <h2>productos</h2>
      <hr/>
      <Row>
        {productos.map((prod)=>
        <Item prod={prod}/>
        )}
      </Row>
    </Container>
  )
}

export default ItemList
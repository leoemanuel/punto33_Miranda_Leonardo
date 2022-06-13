import React from 'react'
import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

function ProductCard({name}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      </Card.Text>
      <ItemCount stock = "5"/>
    </Card.Body>
  </Card>
  )
}

export default ProductCard
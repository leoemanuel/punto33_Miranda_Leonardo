import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';

export default function NavBar() {
  return (
    <>
    <Navbar bg="secondary" variant="dark" >
    <Container>
    <Navbar.Brand href="#home">PUNTO 33</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#Locales">Locales</Nav.Link>
      <Nav.Link href="#Menu">Menu</Nav.Link>
    </Nav>
    <CartWidget/>
    </Container>
    
    </Navbar>
  

  </>
  )
}
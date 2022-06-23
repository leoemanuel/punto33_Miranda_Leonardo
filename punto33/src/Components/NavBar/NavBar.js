import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <>
    <Navbar bg="secondary" variant="dark" >
    <Container>
    <Link to="/"><h1>Punto 33</h1></Link>
    <Nav className="me-auto">
      <ul>
        <li><Link to="productos/hamburguesas">Hamburguesas</Link></li>
        <li><Link to="productos/wraps">Wraps</Link></li>
      </ul>
    </Nav>
    <Link to="cart"><CartWidget/></Link>
    
    </Container>
    
    </Navbar>
  

  </>
  )
}
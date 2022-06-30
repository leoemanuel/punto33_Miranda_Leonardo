import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark" >
    <Container className="container-fluid">
    <Link to="/"><h1 className='justify-content-start'>Punto 33</h1></Link>
    <Nav className="mx-5">
      <Link to="productos/hamburguesas" className='btn btn-light mx-2'>Hamburguesas</Link>
      <Link to="productos/wraps" className='btn btn-light mx-2'>Wraps</Link>
      <Link to="productos/lomos" className='btn btn-light mx-2'>Lomos</Link>
      <Link to="productos/milas" className='btn btn-light mx-2'>Milas</Link>
    </Nav>
    <Link to="cart"><CartWidget/></Link>
    </Container>
    
    </Navbar>
  

  </>
  )
}
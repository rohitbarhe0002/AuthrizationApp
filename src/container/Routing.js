import React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
export default function Routing() {
    return (
        
 <div className="App">


  {/* <Link to ="/RegistrationForm">Register</Link> */}

  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/RegistrationForm">signUp</Nav.Link>
    
      </Nav>
      <Button varient="Success"  >Logout</Button>
    </Container>
  </Navbar>

</div>
        
    )
}

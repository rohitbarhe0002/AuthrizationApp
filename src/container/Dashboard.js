import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Product from '../component/product';
import Location from '../component/Location';
import Transaction from '../component/Transaction';
import Familis from '../component/Familis';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';


export default function Dashboard() {
  const token = useSelector((state) => state.Token.token);

  let history = useHistory();

  const handleClick =() => {
  localStorage.removeItem("token");
  history.push('/LoginUser');
  window.location.reload()
  }
    return (
        
    
        <div>

        {!token?(
        <>
      <Navbar bg="darknlkn hj" variant="dark"></Navbar>
        <Nav.Link href="/RegistrationForm">signUp</Nav.Link> 
        <Nav.Link href="/LoginUser">Login</Nav.Link></>):(
        <>
         <Navbar bg="warning" variant="dark">
  <Container>
  <Navbar.Brand href="/">Navbar</Navbar.Brand>
  <Nav className="me-auto">
        <Nav.Link href="/Product">Product</Nav.Link>
        <Nav.Link href="/Location">Location</Nav.Link>
        <Nav.Link href="/Transaction">Transaction</Nav.Link>
        <Nav.Link href="/Family">Family</Nav.Link>
        <Button varient="Success" type ="submit" onClick={handleClick}>Logout</Button>
   </Nav>
</Container>
</Navbar> 

        </>
        )}


        
            
        </div>
    )
}

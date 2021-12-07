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


export default function Dashboard() {
  let history = useHistory();
  const handleClick =()=>{
  localStorage.removeItem("token");
  history.push('/LoginUser');
  }

    return (
        
        <div>
          <h1>Welcome to Dashboard</h1>
        <Button varient ="success"onClick={handleClick}>Logout</Button>
     <ul>
        
        <Link to ="product">Product</Link><br/> 
        <Link to ="Location">Location</Link><br/>
        <Link to ="Transaction">Transaction</Link><br/>
        <Link to ="Familis">Familis</Link><br/>


        
{/*      
       <Navbar bg="warning" variant="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/RegistrationForm">signUp</Nav.Link>
      </Nav>
      <Button varient="Success"  >Logout</Button>
    </Container>
  </Navbar> */}

        
      </ul>
  
        
            
        </div>
    )
}

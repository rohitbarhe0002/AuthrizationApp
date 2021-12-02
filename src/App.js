import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import RegistrationForm from './container/RegistrationForm';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Dashboard from './container/Dashboard';
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUser from './container/LoginUser';

function App() {
  return (
    <div className="App">
  
    <Router>
      {/* <Link to ="/RegistrationForm">Register</Link> */}

      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/RegistrationForm">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
      <Route path ="/RegistrationForm" component={RegistrationForm}/>
      <Route path ="/LoginUser" component={LoginUser}/>
      <Route path ="/Dashboard" component={Dashboard}/>
    </Router>
  
    </div>
  );
}

export default App;

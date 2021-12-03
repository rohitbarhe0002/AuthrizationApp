import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import RegistrationForm from './container/RegistrationForm';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Dashboard from './container/Dashboard';
import Product from './component/product';
import Familis from './component/Familis';
import Location from './component/Location';
import Transaction from './component/Transaction';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUser from './container/LoginUser';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function App() {
 const history = useHistory();

  const handleClick = (e) =>{
    e.preventDefault()
   history.push("/");
  }
  return (
    <div className="App">

      <Router>
        {/* <Link to ="/RegistrationForm">Register</Link>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/RegistrationForm">signUp</Nav.Link>
            </Nav>
            <Button varient="Success" onClick={handleClick} >Logout</Button>
          </Container>
        </Navbar> */}

        <Route path="/RegistrationForm" component={RegistrationForm} />
        <Route path="/LoginUser" component={LoginUser} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Product" component ={Product}/>
        <Route path="/Location" component ={Location}/>
        <Route path="/Transaction" component ={Transaction}/>
        <Route path="/Familis" component ={Familis}/>
       
      </Router>

    </div>
  );
}

export default App;

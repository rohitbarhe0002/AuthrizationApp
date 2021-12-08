import React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard'
import PublicRoute from '../component/Publicrouting'
import PrivateRoute from '../component/Privaterouting'
import RegistrationForm from './RegistrationForm'
import Familis from '../component/Familis'
import LoginUser from './LoginUser'
import Product from '../component/product'
import Location from '../component/Location'
import Transaction from '../component/Transaction'
export default function Routing() {
  
  return (
    <>

      <Router>
        <Dashboard/>
       
        
        
        <Switch>

          <PublicRoute exact path="/LoginUser" component={LoginUser} />
          <PublicRoute exact path="/RegistrationForm" component={RegistrationForm} />

          <PrivateRoute exact path="/Products" component={Product} />
          <PrivateRoute path="/Locations" component={Location} />
          <PrivateRoute path="/Transaction" component={Transaction} />
          <PrivateRoute path="/Familis" component={Familis} />

        </Switch>
      </Router>
      </>
  

  )
}

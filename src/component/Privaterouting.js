import React from 'react';
import {  Redirect } from 'react-router-dom';
import LoginUser from '../container/LoginUser';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    
    //const i= localStorage.getItem('token')

   const i = localStorage.getItem('token')
    console.log("routing",i);
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Router>
        <Route {...rest} render={props => (
            {i}?<Component {...props} />
            : <Redirect to="/LoginUser" />
        )} />
        </Router>
    );
};

export default PrivateRoute;
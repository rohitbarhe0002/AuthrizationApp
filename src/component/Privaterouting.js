import React from 'react';
import {  Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginUser from '../container/LoginUser';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    const token = useSelector((state) => state.Token.token);
    //const i= localStorage.getItem('token')

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        
        <Route {...rest} render={props => (
            token?<Component {...props} />
            : <Redirect to="/LoginUser" />
        )} />
       
    );
};

export default PrivateRoute;
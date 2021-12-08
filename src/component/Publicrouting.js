 import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector} from "react-redux";

const PublicRoute = ({ component: Component }) => {
  const token = useSelector((state) => state.Token.token);
  return (
    <Route
      
      render={()=> (token ? <Redirect to="/Login" /> : <Component />)}
    />
  );
};

export default PublicRoute;
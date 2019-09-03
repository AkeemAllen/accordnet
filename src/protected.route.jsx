/*
 * Component has list of routes that aren't protected
 * if the route to be accessed on of those components then the user
 * is allowed to go there
 * However if not then user is redirected to login
 *
 * Auth class determines if the user is logged in via boolean variable
 *
 * Component Characteristics
 * This component is the same as the route component only that now it
 * actually checks the routes before
 * sending the user there
 * */

import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const unProtectedRoutes = [
  '/',
  '/login',
  '/register',
  '/about',
  '/contact',
  '/disclaimer',
  '/passwordrecovery',
];
const AdminRoutes = ['configuration', 'permissions'];

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;

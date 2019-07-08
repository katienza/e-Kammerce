import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...urlPath }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))

  return (
    <Route
      {...urlPath}
      render={routeProps =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to='/'
          />
        )
      }
    />
  );
};

export default PrivateRoute
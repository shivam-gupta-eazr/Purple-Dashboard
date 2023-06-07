import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const PrivateRouter = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/user-pages/login-1" />
        )
      )}
    />
  );

  export default PrivateRouter;
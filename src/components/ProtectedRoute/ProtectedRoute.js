import React from "react";
import { connect } from 'react-redux'
import { Redirect, Route } from "react-router-dom";

export function ProtectedRoute({ children, ...rest }) {

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!rest.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token,
  }  
}

export const ConnectedProtectedRoute = connect(mapStateToProps)(ProtectedRoute)
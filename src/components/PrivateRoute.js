import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={rest.redirectTo} />
        )
      }
    />
  )
}

PrivateRoute.defaultProps = { redirectTo: '/login' }

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
}

export default PrivateRoute

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  exact,
  path,
  strict,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      strict={strict ? strict : undefined}
      exact={exact}
      path={path}
      render={props =>
        isAuthenticated === true ? (
          <Component {...{ ...props, ...rest }} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  )
}

PrivateRoute.defaultProps = { redirectTo: '/login', strict: false, exact: false }

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  strict: PropTypes.bool,
  exact: PropTypes.bool,
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
}

export default PrivateRoute

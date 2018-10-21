import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirect: pathname,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.defaultProps = { redirect: '/login' }

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string,
}

export default PrivateRoute

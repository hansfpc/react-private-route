# react-private-route [![npm version](https://badge.fury.io/js/react-private-route.svg)](https://badge.fury.io/js/react-private-route) 

Declarative private routing for React


### Installation

Using [npm](https://www.npmjs.com/):

    $ npm i react-private-route


Using [yarn](https://yarnpkg.com/):

    $ yarn add react-private-route


### Basic Usage

```js
import PrivateRoute from 'react-private-route'

class App extends Component {
  render() {
    return (
     ...
        <Router>
          <div className={'main-container'}>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute
                exact
                path="/"
                component={Home}
                isAuthenticated={!!isLoggedIn() /* this method returns true or false */}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
     ...
    )
  }
}

export default App
```

### Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/hansfpc/react-private-route/issues).

### Credits

React Router is built and maintained by @hansfpc.

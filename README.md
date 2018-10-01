# react-private-route 
[![npm version](https://badge.fury.io/js/react-private-route.svg)](https://badge.fury.io/js/react-private-route) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Declarative private routing for React

### Working demo available at

[![Edit y0pw4kz8kx](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y0pw4kz8kx)


### Installation

Using [npm](https://www.npmjs.com/):

    $ npm i react-private-route


Using [yarn](https://yarnpkg.com/):

    $ yarn add react-private-route


### Basic Usage

```js
...
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
...
import PrivateRoute from 'react-private-route'
...

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

React Private Route is built and maintained by [@hansfpc](https://github.com/hansfpc).

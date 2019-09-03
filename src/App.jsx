import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import {Register, Login} from './components/login';
import routes from './routes';
import ProtectedRoute from './protected.route';

class App extends Component {
  render() {
    return (
      // eslint-disable-next-line no-undef
      <Router basename={process.env.REACT_APP_BASENAME || ''}>
        <div className="App">
          <Switch>
            {routes.map((route, index) => {
              return (
                <ProtectedRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={(props) => <route.component {...props} />}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

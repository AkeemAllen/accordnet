import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import {Register} from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}

export default App;

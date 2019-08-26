import React, {Component} from 'react';
import './App.css';
import CardComponent from './components/CardComponent.jsx';
import {ColorPalette, Display} from 'components/ColorPalette';
import {Login, Register} from './components/login';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;

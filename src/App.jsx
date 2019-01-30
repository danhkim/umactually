import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.jsx';
import Screen from './Screen.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen />
        <Nav />
      </div>
    );
  }
}

export default App;

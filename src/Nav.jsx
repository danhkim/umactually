import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav-button">Um, Actually,</div>
        <div className="nav-button">Um, What?</div>
        <div className="nav-button">Um, Pics?</div>
        <div className="nav-button">Um, Gimme</div>
      </div>
    );
  }
}
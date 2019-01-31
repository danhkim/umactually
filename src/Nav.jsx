import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav-highlight" />
        <div className="nav-button" onClick={event => this.props.control(0)}>Um, Actually,</div>
        <div className="nav-button" onClick={event => this.props.control(1)}>Um, What?</div>
        <div className="nav-button" onClick={event => this.props.control(2)}>Um, Pics?</div>
        <div className="nav-button" onClick={event => this.props.control(3)}>Um, Gimme</div>
      </div>
    );
  }
}
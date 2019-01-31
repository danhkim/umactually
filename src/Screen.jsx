import React, { Component } from 'react';
import './Screen.css';

export default class Screen extends Component {
  render() {
    return (
      <div className="Screen">
        <h1 className="vcenter">{this.props.text}</h1>
        
      </div>
    );
  }
}
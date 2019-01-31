import React, { Component } from 'react';
import image from './test.jpeg';
import './Screen.css';

export default class Screen extends Component {
  render() {
    return (
      <div className="Screen">
        <h1 className="vcenter">{this.props.text}</h1>
        <a className="download" href={image} download="miracles.jpeg">Download</a>
      </div>
    );
  }
}
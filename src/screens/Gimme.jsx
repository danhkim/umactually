import React, { Component } from 'react';
import image from '../test.jpeg';

import './Gimme.css';
import './GimmePyro.css';


export default class Gimme extends Component {
  render() {
    return (
      <div className="Gimme">
        <span className="gimme-title">Get it<br/>bitch</span>
        <a className="gimme-download" href={image} download="miracles.jpeg">Download Pack</a>
        <div class="pyro">
          <div class="before"></div>
          <div class="after"></div>
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import image from '../test.jpeg';
import Screen from './Screen';

import './Gimme.css';
import './GimmePyro.css';
import AssetExplosion from './AssetExplosion';


export default class Gimme extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Gimme">
        <AssetExplosion />
        <Screen slider={this.props.slider}/>
        <span className="gimme-title">Get it<br/>bitch</span>
        <a className="gimme-download" href={image} download="miracles.jpeg">Download Pack</a>
        <div className="pyro">
          <div className="before"></div>
          <div claclassNamess="after"></div>
        </div>
      </div>
    );
  }
}
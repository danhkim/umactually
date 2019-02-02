import React, { Component } from 'react';

import './AssetExplosion.css';


export default class AssetExplosion extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="AssetExplosion">
        <div className="circle anim-1" />
        <div className="circle anim-2" />
        <div className="circle anim-3" />
        <div className="circle anim-4" />
        <div className="square anim-5" />
        <div className="square anim-6" />
        <div className="square anim-7" />
        <div className="square anim-8" />
      </div>
    );
  }
}
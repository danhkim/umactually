import React, { Component } from 'react';
import Screen from './Screen';
import './Actually.css';

export default class Actually extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Actually">
        <Screen slider={this.props.slider}/>
        <span className="actually-um">Um,</span>
        <span className="actually-actually">Actually,</span>
      </div>
    );
  }
}
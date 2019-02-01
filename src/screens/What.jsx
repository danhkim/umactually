import React, { Component } from 'react';
import './What.css';
import Screen from './Screen';

export default class What extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="What">
        <Screen slider={this.props.slider}/>
        <span className="what-title">Troll for<br/>Good</span>
        <span className="what-text"></span>
      </div>
    );
  }
}
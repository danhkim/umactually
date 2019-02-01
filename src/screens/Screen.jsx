import React, { Component } from 'react';
import './Screen.css';
import WheelReact from 'wheel-react';

export default class Screen extends Component {
  
  constructor(props){
    super(props);
    WheelReact.config({
      up: () => {
        this.props.slider().slickPrev();
      },
      down: () => {
        this.props.slider().slickNext();
      }
    });
  }

  componentWillUnmount(){
    WheelReact.clearTimeout();
  }

  render() {
    return (
      <div {...WheelReact.events} className="wheel-detect" />
    );
  }
}
import React, { Component } from 'react';
import Screen from './Screen';
import './Actually.css';
import vid from '../1-2.mp4';

export default class Actually extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.getElementById('myVideo').play();
  }

  render() {
    return (
      <div className="Actually">
        <Screen slider={this.props.slider}/>
        <video playsinline muted loop  autoplay id="myVideo">
          <source src={vid} type="video/mp4" />
        </video>
        <span className="actually-um">Um,</span>
        <span className="actually-actually">Actually,</span>
      </div>
    );
  }
}
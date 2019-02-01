import React, { Component } from 'react';
import './Pics.css';
import instafeed from 'instafeed-lite'
import Screen from './Screen';

export default class Pics extends Component {

  constructor(props) {
    super(props)
    this.state = {
        data:[]
    };
}


  componentDidMount(){
    const options = {
      accessToken: "8639908970.1677ed0.593f7101605f49838a11f8754701feb2",
      get: 'user', // popular, user
      resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
      sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
      userId: 8639908970,
    }
    instafeed(options).then(e => {this.setState({data: e.data.slice(0,6)})});
  }

  // renderPics(){
  //   this.state.data.map((data) => {
  //     console.log(data.images.standard_resolution.url);
  //     return (<img src={data.images.standard_resolution.url} height="100px" width="100px"/>);
  //   });
  // }

  render() {    
    return (
      <div className="Pics">
        <Screen slider={this.props.slider}/>
        <div className="pics-container">
          {this.state.data.map((data) => {
            console.log(data.images.standard_resolution.url);
            return (<img className="pics-insta" src={data.images.standard_resolution.url}/>);
          })}
        </div>
        <span className="pics-left-top">@</span>
        <span className="pics-right-top">@ us<br/>@</span>
        <span className="pics-bottom">@um_actually</span>
      </div>
    );
  }
}
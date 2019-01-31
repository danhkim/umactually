import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.jsx';
import Slider from "react-slick";
import Screen from './Screen.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(number) {
    this.sliderWrapper.slickGoTo(number)
  }

  render() {

    var settings = {
      dots: false,
      infinite: true,
      vertical: true,
      swipeToSlide: true,
      verticalSwiping: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="App">
        <Slider ref={sliderWrapper => (this.sliderWrapper = sliderWrapper)} {...settings}>
          <Screen text="1"/>
          <Screen text="2"/>
          <Screen text="3"/>
          <Screen text="4"/>
        </Slider>
        <Nav control={this.changeHandler} />
      </div>
    );
  }
}

export default App;

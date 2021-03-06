import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.jsx';
import Slider from "react-slick";
import Screen from './Screen.jsx';
import Actually from './screens/Actually';
import What from './screens/What';
import Pics from './screens/Pics';
import Gimme from './screens/Gimme';

class App extends Component {

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(number) {
    this.sliderWrapper.slickGoTo(number)
  }

  prevHandler(){
    this.sliderWrapper.slickPrev();
  }

  nextHandler(){
    this.sliderWrapper.slickNext();
  }

  swipeHandler(number,next) {
    var prevCurrent = document.getElementsByClassName("current")[0];
    prevCurrent.classList.remove("current");

    var newCurrent = document.getElementsByClassName((next)+"")[0];
    newCurrent.classList.add("current");  
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
        <Slider 
          ref={sliderWrapper => (this.sliderWrapper = sliderWrapper)} 
          {...settings}
          beforeChange={this.swipeHandler}>
          <Actually slider={e => this.sliderWrapper}/>
          <What slider={e => this.sliderWrapper} />
          <Pics slider={e => this.sliderWrapper}/>
          <Gimme slider={e => this.sliderWrapper} />
        </Slider>
        <Nav control={this.changeHandler} />
      </div>
    );
  }
}

export default App;

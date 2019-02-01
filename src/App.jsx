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
import WheelReact from 'wheel-react';
class App extends Component {

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this)
    WheelReact.config({
      up: () => {
        console.log("UPPPP")
        this.prevHandler();
      },
      down: () => {
        console.log("UPPPP")

        this.nextHandler();
      }
    });
  }

  componentWillUnmount(){
    WheelReact.clearTimeout();
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
          <Actually />
          <What />
          <Pics />
          <Gimme />
        </Slider>
        <div           {...WheelReact.events}
className="wheel-detect" />
        <Nav control={this.changeHandler} />
      </div>
    );
  }
}

export default App;

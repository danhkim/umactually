import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  animate(event) {
    var prevCurrent = document.getElementsByClassName("current")[0];
    prevCurrent.classList.remove("current");
    event.target.classList.add("current");
    // void event.currentTarget.offsetWidth;
  }

  render() {
    return (
      <div className="Nav">
        <div className="0 nav-button actually current" 
          onClick={event => {this.props.control(0); this.animate(event)}}>
          <span className="nav-button-text">
            Um, <span className="mobile-text"/>Actually,
          </span>
        </div>
        <div className="1 nav-button what" 
          onClick={event => {this.props.control(1); this.animate(event)}}>
          <span className="nav-button-text">
            Um, <span className="mobile-text"/>What?
          </span>
        </div>
        <div className="2 nav-button pics" 
          onClick={event => {this.props.control(2); this.animate(event)}}>
          <span className="nav-button-text">
            Um, <span className="mobile-text"/>Pics?
          </span>
        </div>
        <div className="3 nav-button gimme" 
          onClick={event => {this.props.control(3); this.animate(event)}}>
          <span className="nav-button-text">
            Um, <span className="mobile-text"/>Gimme
          </span>
        </div>
        <div className="nav-highlight" />
      </div>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';

class Intro extends React.Component {
  render () {
    return (
      <section className="intro">
        {/* 
          TODO:
          Complete intro page content
          Complete intro page styling
         */}
        <section className="introLayer1">
          <div className="introSplashLeft">
            <span className="bigTitle">Find fresh produce</span>
            <br></br>
            <span className="bigSubTitle">In your neighborhood</span>
            <br></br>
            <br></br>
            <span className="introSplashDescription">Find publicly accessible fruit, veggies, herbs,<br></br>
            spices, and more within your community!</span>
          </div>
          <div className="introSplashRight">
            <img src={window.images.lemonHarvest} className="lemonHarvest"></img>
          </div>
        </section>
        <section className="introLayer2">
         
        </section>
      </section>
    );

  }
};

export default Intro;
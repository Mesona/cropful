import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import InfoWindow from '../map/infoWindow';

const stories = [
  (
    <div>
      <p className="story storyFirst">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada."</p>
      <br></br>
      <span className="bold">Botimus Maximus</span>
    </div>
  ),
  (
    <div>
      <p className="story storySecond">"I recommend you don't fire until you're within 40,000 kilometers. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Your head is not an artifact! I'm afraid I still don't understand, sir. You enjoyed that. Some days you get the bear, and some days the bear gets you. Wouldn't that bring about chaos? Fate. It protects fools, little children, and ships named "Enterprise." Mr. Worf, you do remember how to fire phasers? I am your worst nightmare! What? We're not at all alike! A lot of things can change in twelve years, Admiral. The look in your eyes, I recognize it. You used to have it for me."</p>
      <br></br>
      <span className="bold">William T. Riker</span>
    </div>
  ),
]

class Intro extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      story: 0,
      harvests: null,
    }

    this.swapStory = this.swapStory.bind(this);
  }

  swapStory(story) {
    if (this.state.story !== story) {
      this.setState({story: story});
    }
  } 

  componentDidMount() {
    this.props.requestAllHarvests()
      .then((harvests) => {
        this.setState({
          harvests: harvests.harvests,
        })
      })
  }

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
            <span className="introSplashDescription">Find publicly accessible fruit, veggies, herbs,
            spices, and more within your community!</span>
          </div>
          <div className="introSplashRight">
            {this.state.harvests === null ? 
              <img src={window.images.lemonHarvest} className="lemonHarvest"></img>
            :
              <InfoWindow harvest={this.state.harvests[Math.floor(Math.random() * this.state.harvests.length)]} updateHarvest={null} map={null} infoWindow={null} isIntro={true} />
            }
          </div>
        </section>
     
    );

  }
};

export default Intro;
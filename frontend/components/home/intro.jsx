import React from 'react';
import { Link } from 'react-router-dom';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      story: 1,
    }

    this.swapStory = this.swapStory.bind(this);
  }

  swapStory(story) {
    if (this.state.story !== story) {
      this.setState({story: story});
    }
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
            <img src={window.images.lemonHarvest} className="lemonHarvest"></img>
          </div>
        </section>
        <section className="introLayer2">
          <section className="companyIcons">
            <img src={window.images.iconApple} />
            <img src={window.images.iconHP} />
            <img src={window.images.iconMcDonalds} />
          </section>
          <div className="blurb">
            <span>If someone gives us a review, we'll probably put it here!</span>
          </div>
          <div className="bigFruitImage blurb">
            {/* Orange tree picture from 
                https://pixabay.com/photos/nature-tree-orange-orange-tree-2444640/ */}
            <img src={window.images.orangeTree} />
            Who knows what you might find around you?
          </div>
        </section>
        <section className="dividerLayers2-3">
        </section>
        <section className="introLayer3">
          <div className="iconTypes column">
            <div>
                <img src={window.images.iconFruit} />
                <img src={window.images.iconAlmond} />
                <br></br>
                <img src={window.images.iconCarrot} />
                <img src={window.images.iconPlant} />
            </div>
            <span>Discover all kinds of things close to you!</span>

          </div>
          <div className="introWalk column">
            <div>
              <img src={window.images.iconWalk} />
            </div>
            <span>Get out and walk around, it's almost as good as the food you'll find!</span>

          </div>
          <div className="introNature column">
            {/* Nature icon from https://www.freeiconspng.com/img/37190 */}
            <div>
                <img src={window.images.iconNature} />
            </div>
            <span>Find pockets of nature hidden even in the largest of cities!</span>

          </div>
        </section>
        <section className="introLayer4">
          <div className="bigLeaf">
            <div>
              <span className="bigTitle">Personal Stories</span><br></br>
              {this.state.story === 1 ? 
                <div>
                  <p className="story">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada."</p>
                  <br></br>
                  <span className="bold">Botimus Maximus</span>
                </div>
              :
                <div>
                  <p className="story">"I recommend you don't fire until you're within 40,000 kilometers. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Your head is not an artifact! I'm afraid I still don't understand, sir. You enjoyed that. Some days you get the bear, and some days the bear gets you. Wouldn't that bring about chaos? Fate. It protects fools, little children, and ships named "Enterprise." Mr. Worf, you do remember how to fire phasers? I am your worst nightmare! What? We're not at all alike! A lot of things can change in twelve years, Admiral. The look in your eyes, I recognize it. You used to have it for me."</p>
                  <br></br>
                  <span className="bold">William T. Riker</span>
                </div>
              }
            </div>
                {/* <input type="radio" name="stories" defaultChecked onClick={() => this.swapStory(1)}></input>
                <input type="radio" name="stories" onClick={() => this.swapStory(2)}></input> */}
            <section className="storyButtons">
              <label className="container">Test1
                <input type="radio" name="stories2" defaultChecked onClick={() => this.swapStory(1)}></input>
                {/* <span className="radioMark"></span> */}
                <span className="checkmark"></span>
              </label>

              <label className="container">Test2
                <input type="radio" name="stories2" onClick={() => this.swapStory(2)}></input>
                {/* <span className="radioMark"></span> */}
                <span className="checkmark"></span>
              </label>
            </section>
          </div>
        </section>
      </section>
    );

  }
};

export default Intro;
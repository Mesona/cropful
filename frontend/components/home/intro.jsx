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
          <div className="iconTypes">
            <div>
                <img src={window.images.iconFruit} />
                <img src={window.images.iconAlmond} />
                <br></br>
                <img src={window.images.iconCarrot} />
                <img src={window.images.iconPlant} />
            </div>
            <span>BLARG</span>

          </div>
          <div className="idk2">
            <div>

            </div>
            <span>BLARG 2</span>

          </div>
          <div className="idk3">
            <div>

            </div>
            <span>BLARG 3</span>

          </div>
        </section>
      </section>
    );

  }
};

export default Intro;
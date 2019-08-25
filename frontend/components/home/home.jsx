import React from 'react';
// import Intro from './intro';
import IntroContainer from './intro_container';
import LandingContainer from './landing_container';

class Home extends React.Component {
  render () {

    const { currentUser } = this.props;
    const display = currentUser ? (

      <div>
        <LandingContainer />
      </div>
    
    ) : (

      <div>
        <IntroContainer />
      </div>

    );

    return (
      <section className="intro">
        { display }
      </section>
    );
  }
};

export default Home;
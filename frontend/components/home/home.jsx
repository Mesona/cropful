import React from 'react';
import Intro from './intro';
import LandingContainer from './landing_container';
import Test from '../test/test';
// import StyledMapWithAnInfoBox from '../test/test';

class Home extends React.Component {
  render () {

    const { currentUser } = this.props;
    const display = currentUser ? (

      <div>
        {/* <LandingContainer /> */}
        <Test />
        {/* <StyledMapWithAnInfoBox /> */}
      </div>
    
    ) : (

      <div>
        <Intro />
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
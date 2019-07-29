import React from 'react';
import Intro from './intro';
import LandingContainer from './landing_container';
// import Test from '../test/test';
// import TestContainer from '../test/test_container';
// import StyledMapWithAnInfoBox from '../test/test';

class Home extends React.Component {
  render () {

    const { currentUser } = this.props;
    const display = currentUser ? (

      <div>
        <LandingContainer />
        {/* <TestContainer /> */}
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
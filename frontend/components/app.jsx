import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Modal from "./modal/modal";
import HomeContainer from './home/home_container';
import NavBarContainer from './nav_bar/nav_bar_container';

// import Test from './test/test';
import TestContainer from './test/test_container';

const App = () => {

  return (
    <div>
      <Modal />
      <Route path="/" component={NavBarContainer} />

      <Switch>

        <Route exact path="/test" component={TestContainer} />
        
        <Route path="/" component={HomeContainer} />

        <Redirect from="*" to="/" />
        
      </Switch>

    </div>
  );
};

export default App;

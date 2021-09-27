import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SignIn from './pages/Sign/SignIn/SignIn';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
};

export default Routes;

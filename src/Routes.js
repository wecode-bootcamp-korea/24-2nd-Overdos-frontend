import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SignUp from './pages/Sign/SignUp/SignUp';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;

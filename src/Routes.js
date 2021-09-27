import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SignUp from './pages/Sign/SignUp/SignUp';
import SignIn from './pages/Sign/SignIn/SignIn';
import Nav from './components/Nav/Nav';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;

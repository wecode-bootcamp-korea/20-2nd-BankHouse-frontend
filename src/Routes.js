import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from '../src/styles/GlobalStyles';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MainTop from './pages/MainTop/MainTop';
import Product from './pages/Product/Product';
import GoToTop from './components/GoToTop/GoToTop';
import SignUp from './pages/SignUp/SignUp';
import AddMoreUserData from './pages/SignUp/AddMoreUserData/AddMoreUserData';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/MainTop" component={MainTop} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/check" component={AddMoreUserData} />
        </Switch>
        <GoToTop />
      </Router>
    );
  }
}

export default Routes;

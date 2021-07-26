import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MainTop from './pages/MainTop/MainTop';
import Product from './pages/Product/Product';
import SignUp from './pages/SignUp/SignUp';
import AddMoreUserData from './pages/SignUp/AddMoreUserData/AddMoreUserData';
import Write from './pages/Write/Write';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/MainTop" component={MainTop} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/check" component={AddMoreUserData} />
          <Route exact path="/write" component={Write} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React from "react";
import { connect } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { createStructuredSelector } from "reselect";

// Components
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import Checkout from "./pages/checkout/index";
// Redux
import { selectCurrentUser } from "./redux/user/selector";
import { checkUserSession } from "./redux/user/actions";

import "./App.scss";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
            />
            <Route
              exact
              path="/signup"
              render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

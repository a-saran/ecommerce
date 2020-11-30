import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { GlobalStyles } from "./global.styles";

// Components
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import Checkout from "./pages/checkout/index";
import ContactPage from "./pages/contactPage/contactPage.component";
import ErrorBoundary from "./components/error-boundary/errorHandler.component";
import ErrorPage from "./components/404/404.component";

// Redux
import { selectCurrentUser } from "./redux/user/selector";
import { checkUserSession } from "./redux/user/actions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Router>
      <GlobalStyles />
      <div className="App">
        <Header />
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/contact" component={ContactPage} />
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
            <Route component={ErrorPage} />
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

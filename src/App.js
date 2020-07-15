import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/HomePage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

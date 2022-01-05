import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "../src/components/Pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import EntryControl from "./EntryControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="background-image"></div>
      <Router>
        <Header />
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <EntryControl />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

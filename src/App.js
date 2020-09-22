import React from "react";
import "./components/style/styles.css";
import SignIn from "./components/signin/sign__in.js";
import SignUp from "./components/signup/sign__up.js";

import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/sign__in" />
        </Route>
        <Route path="/sign__in">
          <SignIn />
        </Route>
        <Route path="/sign__up">
          <SignUp />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

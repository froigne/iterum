import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "app/pages/HomePage";
import React from "react";

const NotFound = () => <h1>Page not found!</h1>;

const AppRouter = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;

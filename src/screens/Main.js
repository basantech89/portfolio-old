import React from 'react';
import Home from "./Home";
import { Route, Switch } from 'react-router-dom';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
};

export default Main;

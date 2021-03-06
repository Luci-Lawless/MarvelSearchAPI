import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App'
import Character from './Character';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/character/:id" component={Character} />
    </Switch>
  </BrowserRouter>
);

export default Router;

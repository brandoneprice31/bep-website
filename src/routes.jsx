import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/views/home';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='*' component={Home} />
  </Route>
);

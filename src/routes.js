import React from 'react';
import { Route } from 'react-router-dom';

import Home from './containers/home/Home';
import Banana from './containers/banana/Banana';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/banana',
    component: Banana,
  },
];

export const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

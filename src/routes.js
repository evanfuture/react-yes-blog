import React from 'react';
import { Route } from 'react-router-dom';

import Home from './containers/home/Home';
import Banana from './containers/banana/Banana';
import YesBlog from './containers/yes-blog/YesBlog';
import YesArticle from './containers/yes-article/YesArticle';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/banana',
    component: Banana,
  },
  {
    path: '/blog',
    component: YesBlog,
  },
  {
    path: '/blog/:id',
    component: YesArticle,
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

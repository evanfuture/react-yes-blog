import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes, RouteWithSubRoutes } from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
    <div>{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}</div>
    </Router>,
    document.getElementById('root'),
);
registerServiceWorker();

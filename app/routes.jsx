import React from 'react';
import {
    Route,
    IndexRoute,
} from 'react-router';

import LayoutView from './views/common/Layout';
import Home from './views/home';
import Search from './containers/search';

if (typeof require.ensure === 'undefined') {
  require.ensure = (a, b) => {
    b(require);
  };
}

/* eslint-disable */
// const routes = {
//   path: '/',
//   component: LayoutView,
//   indexRoute: { component: Search },
//   childRoutes: [
//     {
//       path: '/about',
//       getComponent: (location, callback) => {
//         require.ensure([], (require) => {
//           callback(null, require('./views/about').default);
//         });
//       },
//     },
//     {
//       path: '/home',
//       component: Home,
//     },
//     {
//       path: '/search',
//       component: Search,
//     },
//   ],
// };
/* eslint-enable */

const routes = (
  <Route path="/" component={LayoutView}>
    <IndexRoute component={Search} />
    <Route path="/home" component={Home} />
    <Route
      path="/about"
      getComponent={
        (location, callback) => {
          require.ensure([], (require) => {
            callback(null, require('./views/about').default);
          });
        }
      }
    />
    <Route path="/search" component={Search} />
  </Route>
);

export default routes;

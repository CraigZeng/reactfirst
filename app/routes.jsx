import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import LayoutView from './views/common/Layout';
import Home from './views/home';

// let routes = {
//     path: '/',
//     component: LayoutView,
//     childRoutes: [
//         {
//             path: '/about',
//             getComponent: function(location, callback) {
//                 require.ensure([], function(require) {
//                     callback(null, require('./views/about').default);
//                 });
//             }
//         },
//         { path: '/home', component: Home }
//     ]
// };

let routes = (
    <Route path="/" component={LayoutView}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" getComponent={(location, callback) => {
                        require.ensure([], function(require) {
                            callback(null, require('./views/about').default);
                        });
                    }
                }/>
    </Route>
);

export default routes;

import React, { Component } from 'react';

import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import LayoutView from './views/common/Layout';
import Home from './views/home';
import About from './views/about';

class R extends Component {
    componentDidMount() {
        console.log('-----')
    }
    render() {
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

        // return (
        //     <Router history={browserHistory} routes={routes}/>
        // );        
        return (
            <Router history={browserHistory}>
                <Route path="/" component={LayoutView}>
                    <IndexRoute component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        );
    }
}

export default R;
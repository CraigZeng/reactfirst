import React, { Component } from 'react';

import {
    Router,
    browserHistory,
} from 'react-router';

import routes from './routes';

class R extends Component {
  componentDidMount() {
    console.log('-----');
  }
  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}

export default R;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import R from './R';

ReactDOM.render(
  <Provider store={store}>
    <R />
  </Provider>,
  document.getElementById('app')
);

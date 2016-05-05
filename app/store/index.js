import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import searchApp from '../reducers';


const loggerMiddleware = createLogger();

const store = createStore(
  searchApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store;

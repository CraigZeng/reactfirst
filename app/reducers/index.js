import { combineReducers } from 'redux';
import search from './search';
import page from './page';

const searchApp = combineReducers({
  page,
  params: search,
});

export default searchApp;

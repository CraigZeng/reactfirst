import { SEARCH_COMPANY } from '../actions';

const initedState = {
  address: 'test',
  name: '',
};

function search(state = initedState, action) {
  switch (action.type) {
    case SEARCH_COMPANY:
      return Object.assign({}, state, {
        name: action.text,
      });
    default:
      return state;
  }
}


export default search;

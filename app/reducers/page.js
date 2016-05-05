import { SEARCH_PAGEGENERATE } from '../actions';

function page(state = 1, action) {
  switch (action.type) {
    case SEARCH_PAGEGENERATE:
      return action.page;
    default:
      return state;
  }
}

export default page;

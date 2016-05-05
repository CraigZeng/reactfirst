import { expect } from 'chai';
import * as actions from '../../actions';

describe('actions', () => {
  it('should create an action to search pagegenaration', () => {
    const page = 2;
    const expectedAction = {
      type: actions.SEARCH_PAGEGENERATE,
      page,
    };
    expect(actions.searchPagegenerate(page)).to.deep.equal(expectedAction);
  });
});
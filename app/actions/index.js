import { ActionCreators as UndoActionCreators } from 'redux-undo';

export const SEARCH_COMPANY = 'SEARCH_COMPANY';
export const SEARCH_PAGEGENERATE = 'SEARCH_PAGEGENERATE';
export const SEARCH_UNDO = 'SEARCH_UNDO';
export const SEARCH_REDO = 'SEARCH_REDO';

export function searchCompany(query) {
  return {
    type: SEARCH_COMPANY,
    text: query,
  };
}

export function searchPagegenerate(page) {
  return {
    type: SEARCH_PAGEGENERATE,
    page,
  };
}

function fetchList(query) {
  return (dispatch) => (
    new Promise((resolve) => {
      setTimeout(() => { resolve(dispatch(searchCompany(query))); }, 3000);
    })
  );
}

export function fetchCompanyList(query) {
  return (dispatch) => {
    dispatch(fetchList(query));
  };
}

export function undoSearch() {
  return (dispatch) => {
    dispatch(UndoActionCreators.undo());
  };
}

export function redoSearch() {
  return (dispatch) => {
    dispatch(UndoActionCreators.redo());
  };
}

export const SEARCH_COMPANY = 'SEARCH_COMPANY';
export const SEARCH_PAGEGENERATE = 'SEARCH_PAGEGENERATE';

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

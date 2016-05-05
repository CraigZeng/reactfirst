import { connect } from 'react-redux';
import { fetchCompanyList, undoSearch, redoSearch } from '../actions';
import Search from '../views/search';


const mapStateToProps = (state) => ({
  name: state.params.present.name,
  canUndo: state.params.past.length > 0,
  canRedo: state.params.future.length > 0,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchkk: (text) => { dispatch(fetchCompanyList(text)); },
  undo: () => { dispatch(undoSearch()); },
  redo: () => { dispatch(redoSearch()); },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;

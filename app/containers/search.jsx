import { connect } from 'react-redux';
import { fetchCompanyList } from '../actions';
import Search from '../views/search';


const mapStateToProps = (state) => ({
  name: state.params.name,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchkk: (text) => { dispatch(fetchCompanyList(text)); },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;

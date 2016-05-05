import React, { Component, PropTypes } from 'react';

import SearchBox from './SearchBox';
import ListBox from './ListBox';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.search.bind(this);
  }

  componentDidMount() { }

  search({ queryText }) {
    this.props.onSearchkk(queryText);
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-box-container">
          <SearchBox onSearch={this.onSearch} />
          <ListBox {...this.props} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onSearchkk: PropTypes.func.isRequired,
};

export default Search;

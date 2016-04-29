import React, { Component } from 'react';

import SearchBox from './SearchBox';
import ListBox from './ListBox';

class Search extends Component {
  componentDidMount() { }
  search({ queryText }) {
    console.log(queryText);
  }
  render() {
    return (
      <div className="search-container">
        <div className="search-box-container">
          <SearchBox onSearch={this.search} />
          <ListBox />
        </div>
      </div>
    );
  }
}

export default Search;

import React, { Component, PropTypes } from 'react';


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.doSearch = this.search.bind(this);
  }

  search() {
    const params = { queryText: this.refs.query.value.trim() };
    this.props.onSearch(params);
  }

  render() {
    return (
      <div className="search-form">
        <input type="text" name="query" ref="query" />
        <button className="search-btn" onClick={this.doSearch}>搜索</button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox;

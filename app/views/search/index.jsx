import React, { Component, PropTypes } from 'react';

import SearchBox from './SearchBox';
import ListBox from './ListBox';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.search.bind(this);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
  }

  componentDidMount() { }

  search({ queryText }) {
    this.props.onSearchkk(queryText);
  }

  undo() {
    this.props.undo();
  }

  redo() {
    this.props.redo();
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-box-container">
          <SearchBox onSearch={this.onSearch} />
          <ListBox {...this.props} />
        </div>
        <button onClick={this.undo} disabled={!this.props.canUndo}>undo</button>
        <button onClick={this.redo} disabled={!this.props.canRedo}>redo</button>
      </div>
    );
  }
}

Search.propTypes = {
  onSearchkk: PropTypes.func.isRequired,
  canRedo: PropTypes.bool.isRequired,
  canUndo: PropTypes.bool.isRequired,
  redo: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
};

export default Search;

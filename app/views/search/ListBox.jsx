import React, { Component, PropTypes } from 'react';

class ListBox extends Component {
  componentDidMount() { }
  render() {
    return (
      <div className="list-container">{this.props.name}</div>
    );
  }
}

ListBox.propTypes = {
  name: PropTypes.string,
};

export default ListBox;

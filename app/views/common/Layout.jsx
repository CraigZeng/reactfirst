import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Layout extends Component {
  render(){
    return (
        <div>
          <div className="nav">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;

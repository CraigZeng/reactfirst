import React, { Component, PropTypes } from 'react';

class Home extends Component {
  componentDidMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      () => 'Your work is not saved! Are you sure you want to leave?'
    );
  }
  render() {
    return (
      <div>Hello, world,t!</div>
    );
  }
}

Home.propTypes = {
  route: PropTypes.object.isRequired,
};

Home.contextTypes = {
  router: PropTypes.object,
};

export default Home;

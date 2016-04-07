import React, { Component, PropTypes } from 'react';

class Home extends Component {
    static contextTypes = {
        router: PropTypes.object,
    }
    componentDidMount() {
        this.context.router.setRouteLeaveHook(this.props.route, () => { return 'Your work is not saved! Are you sure you want to leave?';})
    }
    render() {
        return (
            <div>Hello, world!</div>
        )
    }
}

export default Home;
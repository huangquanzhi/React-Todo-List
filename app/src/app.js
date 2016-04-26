import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const propTypes = {
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

      </div>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    message: state.message,
    authentication: state.authentication,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(auth, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

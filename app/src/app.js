import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoListContainer from './containers/TodoListContainer';
import TodoTaskContainer from './containers/TodoTaskContainer';

const propTypes = {};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container">
        <input type="button" className="btn btn-block btn-large" value="sad"/>
        <TodoTaskContainer />
        <TodoListContainer />
      </main>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

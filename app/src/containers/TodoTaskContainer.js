import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as taskActionCreator from '../actions/task';

import TaskForm from '../components/TaskForm';

const propTypes = {};

class TodoTaskContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoListContainer">
        <TaskForm {...this.props} />
      </div>
    );
  }
}

TodoTaskContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    task: state.task,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    taskActions: bindActionCreators(taskActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTaskContainer);

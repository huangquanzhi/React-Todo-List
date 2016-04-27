import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as taskActionCreator from '../actions/task';
import * as categoryActionCreator from '../actions/category';
import * as todoActionCreator from '../actions/todo';
import * as snackBarActionCreator from '../actions/snackbar';

import TaskForm from '../components/TaskForm';

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

function mapStateToProps(state) {
  return {
    task: state.task,
    category: state.category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(categoryActionCreator, dispatch),
    taskActions: bindActionCreators(taskActionCreator, dispatch),
    todoActions: bindActionCreators(todoActionCreator, dispatch),
    snackbarActions: bindActionCreators(snackBarActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTaskContainer);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as taskActionCreator from '../actions/task';
import * as categoryActionCreator from '../actions/category';

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
    category: state.category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    taskActions: bindActionCreators(taskActionCreator, dispatch),
    categoryActions: bindActionCreators(categoryActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTaskContainer);

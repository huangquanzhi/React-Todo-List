import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActionCreator from '../actions/todo';

import TodoList from '../components/TodoList';

const propTypes = {
  category: PropTypes.object,
  todoActions: PropTypes.object,
  todos: PropTypes.array,
};

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoListContainer">
        <TodoList {...this.props} />
      </div>
    );
  }
}

TodoListContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    todos: state.todo,
    category: state.category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

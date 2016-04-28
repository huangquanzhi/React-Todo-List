import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActionCreator from '../actions/todo';
import * as orderActionCreator from '../actions/order';

import TodoList from '../components/TodoList';

const propTypes = {
  category: PropTypes.object,
  order: PropTypes.object,
  orderActions: PropTypes.object,
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
    category: state.category,
    todos: state.todo,
    order: state.order,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreator, dispatch),
    orderActions: bindActionCreators(orderActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

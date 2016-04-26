import React, { Component, PropTypes } from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';

import TodoHeader from './TodoHeader';
import TodoRow from './TodoRow';

const propTypes = {
  filterBy: PropTypes.string,
  todos: PropTypes.array,
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.renderTodoHeader = this.renderTodoHeader.bind(this);
    this.renderTodoItems = this.renderTodoItems.bind(this);
  }

  renderTodoHeader() {
    return (
      <TodoHeader/>
    );
  }

  renderTodoItems() {
    const { todos } = this.props;

    const todoList = todos;

    return todoList.map((todo, index) => {
      return (
        <TodoRow
          description={todo.text}
          category={todo.category}
          priority={todo.priority}
          time={todo.timeStamp}
          editAction={() => {}}
          editAction={() => {}}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <Table className="todoList">
        { this.renderTodoHeader() }
        <TableBody>
          {this.renderTodoItems() }
        </TableBody>
      </Table>
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;

import React, { Component, PropTypes } from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableHeader from 'material-ui/lib/table/table-header';

import TodoHeader from './TodoHeader';
import TodoRow from './TodoRow';

const propTypes = {
  category: PropTypes.object,
  filterBy: PropTypes.string,
  todos: PropTypes.array,
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.renderTodoItems = this.renderTodoItems.bind(this);
  }

  getPriority(order) {
    switch (order) {
      case 0:
        return 'Low';
      case 1:
        return 'Mid';
      case 2:
        return 'High';
      default:
        return 'Unknown';
    }
  }

  renderTodoItems() {
    const { category, todos } = this.props;

    const todoList = todos;

    return todoList.map((todo, index) => {
      const priority = this.getPriority(todo.priority);
      return (
        <TodoRow
          description={todo.text}
          category={category.categories[todo.category]}
          priority={priority}
          time={todo.timeStamp}
          color={todo.color}
          editAction={() => {}}
          editAction={() => {}}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <Table
        className="todoList"

      >
        <TableHeader>
          <TodoHeader />
        </TableHeader>
        <TableBody
          showRowHover
        >
          {this.renderTodoItems() }
        </TableBody>

      </Table>
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;

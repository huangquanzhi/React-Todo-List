import React, { Component, PropTypes } from 'react';
import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableHeader from 'material-ui/lib/table/table-header';

import TodoHeader from './TodoHeader';
import TodoRow from './TodoRow';

import * as orderCon from '../constants/order';

const propTypes = {
  category: PropTypes.object,
  filterBy: PropTypes.string,
  order: PropTypes.object,
  orderActions: PropTypes.object,
  todos: PropTypes.array,
};

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.getTodoList = this.getTodoList.bind(this);
    this.handleSort = this.handleSort.bind(this);
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

  getTodoList() {
    const { order, todos } = this.props;

    const todoList = todos;

    switch (order.orderBy) {
      case orderCon.ORDER_BY_PRIORITY_DESC:
        todoList.sort((a, b) => {
          return b.priority - a.priority;
        });
        break;
      case orderCon.ORDER_BY_PRIORITY_ASC:
        todoList.sort((a, b) => {
          return a.priority - b.priority;
        });
        break;
      case orderCon.ORDER_BY_TIME_DESC:
        todoList.sort((a, b) => {
          return new Date(b.timeStamp) - new Date(a.timeStamp);
        });
        break;
      case orderCon.ORDER_BY_TIME_ASC:
        todoList.sort((a, b) => {
          return new Date(a.timeStamp) - new Date(b.timeStamp);
        });
        break;
      default:
    }

    return todoList;
  }

  handleSort(sortBy) {
    const { orderActions } = this.props;
    orderActions.setOrderBy(sortBy);
  }

  renderTodoItems() {
    const { category } = this.props;

    const todoList = this.getTodoList();

    return todoList.map((todo, index) => {
      const priority = this.getPriority(todo.priority);
      return (
        <TodoRow
          description={todo.text}
          category={category.categories[todo.category]}
          priority={priority}
          time={todo.timeStamp}
          color={todo.color}
          key={index}
        />
      );
    });
  }

  render() {
    const { order } = this.props;
    return (
      <Table
        className="todoList"
      >
        <TableHeader>
          <TodoHeader
            order={order.orderBy}
            sortByAction={this.handleSort}
          />
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

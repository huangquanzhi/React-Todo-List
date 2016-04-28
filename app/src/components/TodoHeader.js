import React, { Component, PropTypes } from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import IconButton from 'material-ui/lib/icon-button';
import NavDropUp from 'material-ui/lib/svg-icons/navigation/arrow-drop-up';
import NavDropDown from 'material-ui/lib/svg-icons/navigation/arrow-drop-down';

import * as orderCon from '../constants/order';

const propTypes = {
  order: PropTypes.string,
  sortByAction: PropTypes.func,
};

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.handleSortByPriority = this.handleSortByPriority.bind(this);
    this.handleSortByTime = this.handleSortByTime.bind(this);
  }

  handleSortByPriority() {
    const { order, sortByAction } = this.props;
    switch (order) {
      case orderCon.ORDER_BY_PRIORITY_ASC:
        sortByAction(orderCon.ORDER_BY_PRIORITY_DESC);
        break;
      case orderCon.ORDER_BY_PRIORITY_DESC:
        sortByAction(orderCon.ORDER_BY_PRIORITY_ASC);
        break;
      default:
        sortByAction(orderCon.ORDER_BY_PRIORITY_DESC);
    }
  }

  handleSortByTime() {
    const { order, sortByAction } = this.props;
    switch (order) {
      case orderCon.ORDER_BY_TIME_ASC:
        sortByAction(orderCon.ORDER_BY_TIME_DESC);
        break;
      case orderCon.ORDER_BY_TIME_DESC:
        sortByAction(orderCon.ORDER_BY_TIME_ASC);
        break;
      default:
        sortByAction(orderCon.ORDER_BY_TIME_DESC);
    }
  }

  render() {
    const { order } = this.props;
    return (
      <TableRow>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>
          Priority
          <IconButton
            onClick={this.handleSortByPriority}
          >
            { order === orderCon.ORDER_BY_PRIORITY_ASC ?
              <NavDropUp />
              :
              <NavDropDown />
            }
          </IconButton>
        </TableHeaderColumn>
        <TableHeaderColumn>
          Time
          <IconButton
            onClick={this.handleSortByTime}
          >
            { order === orderCon.ORDER_BY_TIME_ASC ?
              <NavDropUp />
              :
              <NavDropDown />
            }
          </IconButton>
        </TableHeaderColumn>
      </TableRow>
    );
  }
}

TodoHeader.propTypes = propTypes;

export default TodoHeader;

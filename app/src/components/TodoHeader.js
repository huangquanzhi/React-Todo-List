import React, { Component } from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableHeader from 'material-ui/lib/table/table-header';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Category</TableHeaderColumn>
          <TableHeaderColumn>Priority</TableHeaderColumn>
          <TableHeaderColumn>Time</TableHeaderColumn>
          <TableHeaderColumn>Actions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
    );
  }
}

export default TodoHeader;

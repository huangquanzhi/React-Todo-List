import React, { Component, PropTypes } from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const propTypes = {
  description: PropTypes.string,
  category: PropTypes.string,
  priority: PropTypes.number,
  time: PropTypes.number,
  editAction: PropTypes.func,
  deleteAction: PropTypes.func,
};

class TodoRow extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    const { editAction } = this.props;
    editAction();
  }

  handleDelete() {
    const { deleteAction } = this.props;
    deleteAction();
  }

  render() {
    const { description, category, priority, time } = this.props;

    return (
      <TableRow>
        <TableRowColumn>{description}</TableRowColumn>
        <TableRowColumn>{category}</TableRowColumn>
        <TableRowColumn>{priority}</TableRowColumn>
        <TableRowColumn>{ new Date(time).getDate() }</TableRowColumn>
        <TableRowColumn>Action</TableRowColumn>
      </TableRow>
    );
  }
}

TodoRow.propTypes = propTypes;

export default TodoRow;
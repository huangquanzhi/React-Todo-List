import React, { Component, PropTypes } from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

const propTypes = {
  description: PropTypes.string,
  category: PropTypes.string,
  color: PropTypes.string,
  priority: PropTypes.string,
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
    const { description, color, category, priority, time } = this.props;

    return (
      <TableRow style={{ backgroundColor: color }}>
        <TableRowColumn>{description}</TableRowColumn>
        <TableRowColumn>{category}</TableRowColumn>
        <TableRowColumn>{priority}</TableRowColumn>
        <TableRowColumn>{ new Date(time).toDateString() }</TableRowColumn>
        <TableRowColumn>Action</TableRowColumn>
      </TableRow>
    );
  }
}

TodoRow.propTypes = propTypes;

export default TodoRow;

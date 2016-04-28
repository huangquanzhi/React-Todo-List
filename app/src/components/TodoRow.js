import React, { Component, PropTypes } from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ActionCheckCircle from 'material-ui/lib/svg-icons/action/check-circle';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
import ImageEdit from 'material-ui/lib/svg-icons/image/edit';

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
    this.state = { hovered: false };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleHoverEnter = this.handleHoverEnter.bind(this);
    this.handleHoverExit = this.handleHoverExit.bind(this);
  }

  handleEdit() {
    const { editAction } = this.props;
    editAction();
  }

  handleDelete() {
    const { deleteAction } = this.props;
    deleteAction();
  }

  handleHoverEnter() {
    this.setState({ hovered: true });
  }

  handleHoverExit() {
    this.setState({ hovered: false });
  }

  render() {
    const { description, color, category, priority, time } = this.props;

    if (!this.state.hovered) {
      return (
        <TableRow
          hoverable
          onCellHover={this.handleHoverEnter}
          onCellHoverExit={this.handleHoverExit}
        >
          <TableRowColumn>
            <FloatingActionButton
              iconStyle={{ backgroundColor: color }}
              disabled
              mini
            />
            {description}
          </TableRowColumn>
          <TableRowColumn>{category}</TableRowColumn>
          <TableRowColumn>{priority}</TableRowColumn>
          <TableRowColumn>{ new Date(time).toDateString() }</TableRowColumn>
        </TableRow>
      );
    }
    return (
      <TableRow
        hoverable
        onCellHover={this.handleHoverEnter}
        onCellHoverExit={this.handleHoverExit}
      >
        <TableRowColumn>
          <FloatingActionButton
            iconStyle={{ backgroundColor: color }}
            disabled
            mini
          />
          {description}
        </TableRowColumn>
        <TableRowColumn>
          <FloatingActionButton
            mini
          >
            <ActionCheckCircle/>
          </FloatingActionButton>
        </TableRowColumn>
        <TableRowColumn>
          <FloatingActionButton
            mini
          >
            <ImageEdit/>
          </FloatingActionButton>
        </TableRowColumn>
        <TableRowColumn>
          <FloatingActionButton
            mini
          >
            <ActionDelete/>
          </FloatingActionButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}

TodoRow.propTypes = propTypes;

export default TodoRow;

import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import ContentFlag from 'material-ui/lib/svg-icons/content/flag';

import TaskPopover from './TaskPopover';

const propTypes = {
  order: PropTypes.number,
  onClick: PropTypes.func,
};


class TaskPriority extends Component {
  constructor(props) {
    super(props);
    this.handleLowClick = this.handleLowClick.bind(this);
    this.handleMidClick = this.handleMidClick.bind(this);
    this.handleHighClick = this.handleHighClick.bind(this);
  }

  handleLowClick() {
    const { onClick } = this.props;
    onClick(0);
  }

  handleMidClick() {
    const { onClick } = this.props;
    onClick(1);
  }

  handleHighClick() {
    const { onClick } = this.props;
    onClick(3);
  }

  renderPopover() {
    const { order } = this.props;
    return (
      <TaskPopover icon={ <ContentFlag/> }>
        <RaisedButton
          primary={ order === 0 }
          label="Low"
          onClick={this.handleLowClick}
        />
        <RaisedButton
          primary={ order === 1 }
          name="1"
          label="Mid"
          value={1}
          onClick={this.handleMidClick}
        />
        <RaisedButton
          primary={ order === 2 }
          label="High"
          onClick={this.handleHighClick}
        />
      </TaskPopover>
    );
  }

  render() {
    const { } = this.props;
    return (
      <div>
        {this.renderPopover()}
      </div>
    );
  }
}

TaskPriority.propTypes = propTypes;

export default TaskPriority;

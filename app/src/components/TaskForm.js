import React, { Component, PropTypes } from 'react';

import TaskInput from './TaskInput';
import TaskDate from './TaskDate';

const propTypes = {
  task: PropTypes.object,
  taskActions: PropTypes.object,
};

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.renderTaskInput = this.renderTaskInput.bind(this);
  }

  handleTaskChange(value) {
    const { taskActions } = this.props;
    taskActions.editText(value);
  }

  handleDateChange(value) {
    const { taskActions } = this.props;
    taskActions.editDate(value);
  }

  renderTaskInput() {
    const { task } = this.props;
    return (
      <TaskInput text={task.text} onChange={this.handleTaskChange}/>
    )
  }

  renderTaskDate() {
    const { task } = this.props;
    return (
      <TaskDate date={task.date} onChange={this.handleDateChange}/>
    )
  }

  render() {
    return (
      <div className="taskForm row">
        <div className="col-md-6">
          {this.renderTaskInput() }
        </div>
        <div className="col-md-6">
          {this.renderTaskDate() }
        </div>
      </div>
    );
  }
}

TaskForm.propTypes = propTypes;

export default TaskForm;
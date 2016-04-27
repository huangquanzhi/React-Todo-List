import React, { Component, PropTypes } from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import TaskInput from './TaskInput';
import TaskDate from './TaskDate';
import TaskPriority from './TaskPriority';
import TaskCategory from './TaskCategory';
import TaskColor from './TaskColor';

const propTypes = {
  category: PropTypes.object,
  categoryActions: PropTypes.object,
  task: PropTypes.object,
  taskActions: PropTypes.object,
};

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleCategoryAdd = this.handleCategoryAdd.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.hangleTaskAdd = this.hangleTaskAdd.bind(this);
    this.renderTaskInput = this.renderTaskInput.bind(this);
    this.renderTaskDate = this.renderTaskDate.bind(this);
    this.renderPriority = this.renderPriority.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
    this.renderColor = this.renderColor.bind(this);
    this.renderAdd = this.renderAdd.bind(this);
  }

  handleTaskChange(value) {
    const { taskActions } = this.props;
    taskActions.editText(value);
  }

  handleDateChange(value) {
    const { taskActions } = this.props;
    taskActions.editDate(value);
  }

  handlePriorityChange(value) {
    const { taskActions } = this.props;
    taskActions.editPriority(value);
  }

  handleCategoryAdd() {
    const { category, categoryActions } = this.props;
    categoryActions.addCategory(category.text);
    categoryActions.clearText();
  }

  handleCategoryChange(value) {
    const { categoryActions } = this.props;
    categoryActions.editText(value);
  }

  handleColorChange(value) {
    const { taskActions } = this.props;
    taskActions.editColor(value);
  }

  hangleTaskAdd(value) {
    const { taskActions } = this.props;
    taskActions.editDate(value);
  }

  renderTaskInput() {
    const { task } = this.props;
    return (
      <TaskInput text={task.text} onChange={this.handleTaskChange}/>
    );
  }

  renderTaskDate() {
    const { task } = this.props;
    return (
      <TaskDate date={task.date} onChange={this.handleDateChange}/>
    );
  }

  renderPriority() {
    const { task } = this.props;
    return (
      <TaskPriority order={task.priority} onClick={this.handlePriorityChange}/>
    );
  }

  renderCategory() {
    const { category, task } = this.props;
    return (
      <TaskCategory
        categories={category.categories}
        currentCategory={task.category}
        onAddClick={this.handleCategoryAdd}
        onTextChange={this.handleCategoryChange}
        text={category.text}
      />
    );
  }

  renderColor() {
    const { task } = this.props;
    return (
      <TaskColor color={task.color} onChange={this.handleColorChange}/>
    );
  }

  renderAdd() {
    return (
      <FloatingActionButton>
        <ContentAdd />
      </FloatingActionButton>
    );
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
        { this.renderPriority() }
        { this.renderCategory() }
        { this.renderColor() }
      </div>
    );
  }
}

TaskForm.propTypes = propTypes;

export default TaskForm;

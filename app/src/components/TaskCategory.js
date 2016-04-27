import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import TextField from 'material-ui/lib/text-field';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
import ActionViewList from 'material-ui/lib/svg-icons/action/view-list';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

import TaskPopover from './TaskPopover';

const propTypes = {
  categories: PropTypes.array,
  currentCategory: PropTypes.number,
  text: PropTypes.string,
  onAddClick: PropTypes.func,
  onTextChange: PropTypes.func,
};

let SelectableList;

class TaskCategory extends Component {
  constructor(props) {
    super(props);
    SelectableList = SelectableContainerEnhance(List);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleTextOnChange = this.handleTextOnChange.bind(this);
    this.renderCategoryList = this.renderCategoryList.bind(this);
    this.renderPopover = this.renderPopover.bind(this);
  }

  handleAddClick() {
    const { onAddClick } = this.props;
    onAddClick();
  }

  handleTextOnChange(e) {
    const { onTextChange } = this.props;
    onTextChange(e.target.value);
  }

  renderCategoryList() {
    const { categories } = this.props;
    return categories.map((category, index) => {
      return (
        <ListItem
          value={index}
          primaryText={category}
        />
      );
    });
  }

  renderPopover() {
    const { currentCategory, text } = this.props;
    return (
      <TaskPopover icon={ <ActionViewList/> }>
        <SelectableList
          value={currentCategory}
          subheader="Categories"
        >
          { this.renderCategoryList() }
        </SelectableList>
        <Divider />
        <List>
          <TextField
            value={text}
            onChange={this.handleTextOnChange}
          />
          <FloatingActionButton
            onClick={this.handleAddClick}
          >
            <ContentAdd />
          </FloatingActionButton>
        </List>
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

TaskCategory.propTypes = propTypes;

export default TaskCategory;

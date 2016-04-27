import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';

const propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnchange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { text } = this.props;
    return (
      <TextField
        floatingLabelText="Todo"
        hintText="Please Enter Todo Item"
        value={text}
        onChange={this.handleOnchange}
      />
    );
  }
}

TaskInput.propTypes = propTypes;

export default TaskInput;

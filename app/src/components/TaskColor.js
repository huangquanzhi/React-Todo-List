import React, { Component, PropTypes } from 'react';
import ImageLens from 'material-ui/lib/svg-icons/image/color-lens';
import ColorPicker from 'react-color';
import TaskPopover from './TaskPopover';

const propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
};

const style = {
  popupPosition: {
    position: 'absolute',
    top: '100px',
    left: '20px',
  },
};

class TaskColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(color) {
    const { onChange } = this.props;
    onChange(color.hex);
  }


  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  renderPopover() {
    const { color } = this.props;
    return (
      <TaskPopover icon={ <ImageLens/> }>
        <ColorPicker
          display={ this.state.displayColorPicker }
          color={ color }
          positionCSS={ style.popupPosition }
          type="sketch"
          position="below"
          onChange={this.handleChange }
        />
      </TaskPopover>
    );
  }

  render() {
    return (
      <div>
        {this.renderPopover()}
      </div>
    );
  }
}

TaskColor.propTypes = propTypes;

export default TaskColor;

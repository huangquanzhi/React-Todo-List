import React, { Component, PropTypes } from 'react';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import FloatingActionButton from 'material-ui/lib/floating-action-button';


const propTypes = {
  children: PropTypes.node,
  button: PropTypes.node,
};

const styles = {
  popover: {
    padding: 20,
  },
};

class TaskPopover extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.renderPopover = this.renderPopover.bind(this);
  }

  handleTouchTap(e) {
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }


  renderPopover() {
    return (
      <FloatingActionButton
        onTouchTap={this.handleTouchTap}
        label="Priority"
      >
        { this.props.icon }
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationFromTop}
        >
          <div style={styles.popover}>
            { this.props.children }
          </div>
        </Popover>
      </FloatingActionButton>
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

TaskPopover.propTypes = propTypes;

export default TaskPopover;

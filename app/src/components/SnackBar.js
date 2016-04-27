import React, { Component, PropTypes } from 'react';
import Snackbar from 'material-ui/lib/snackbar';

const propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
  onClick: PropTypes.func,
};

class TaskSnackBar extends Component {
  constructor(props) {
    super(props);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.renderSnackBar = this.renderSnackBar.bind(this);
  }

  handleTouchTap() {
    const { onClick } = this.props;
    onClick(true);
  }

  handleRequestClose() {
    const { onClick } = this.props;
    onClick(false);
  }


  renderSnackBar() {
    const { show, message } = this.props;
    return (
      <Snackbar
        open={show}
        message={message}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderSnackBar()}
      </div>
    );
  }
}

TaskSnackBar.propTypes = propTypes;

export default TaskSnackBar;

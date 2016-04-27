import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoListContainer from './containers/TodoListContainer';
import TodoTaskContainer from './containers/TodoTaskContainer';

import SnackBar from './components/SnackBar';
import * as snackBarActionCreator from './actions/snackbar';

const propTypes = {
  snackbar: PropTypes.object,
  snackbarActions: PropTypes.object,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSnackBarClick = this.handleSnackBarClick.bind(this);
  }

  handleSnackBarClick(status) {
    const { snackbarActions } = this.props;
    snackbarActions.openSnackBar(status);
  }

  render() {
    const { snackbar } = this.props;
    return (
      <main className="container">
        <TodoTaskContainer />
        <TodoListContainer />
        <SnackBar
          show={snackbar.show}
          message={snackbar.message}
          onClick={this.handleSnackBarClick}
        />
      </main>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    snackbar: state.snackbar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    snackbarActions: bindActionCreators(snackBarActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

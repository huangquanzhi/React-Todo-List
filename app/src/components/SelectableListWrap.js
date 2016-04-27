import React, { Component, PropTypes } from 'react';

export const wrapState = (ComposedComponent) => {
  const propTypes = {
    value: PropTypes.number,
    onClick: PropTypes.func,
  };

  class StateWrapper extends Component {
    constructor(props) {
      super(props);
      this.handleUpdateSelectedIndex = this.handleUpdateSelectedIndex.bind(this);
    }

    handleUpdateSelectedIndex(e, index) {
      const { onClick } = this.props;
      onClick(index);
    }

    render() {
      const { value } = this.props;
      return (
        <ComposedComponent
          {...this.props}
          valueLink={{ value, requestChange: this.handleUpdateSelectedIndex }}
        />
      );
    }
  }

  StateWrapper.propTypes = propTypes;

  return StateWrapper;
};

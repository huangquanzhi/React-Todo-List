import {
  INIT,
} from '../constants';

const initialState = {
  init: false,
};

const init = (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, {
        init: action.status,
      });
    default:
      return state;
  }
};

export default init;

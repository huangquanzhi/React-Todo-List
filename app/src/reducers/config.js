import {
  SET_SNACKBAR_STATE
} from '../constants/config';

const initialState = {
  snackBar: false,
};

const config = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR_STATE:
      return Object.assign({}, state, {
        snackBar: action.status,
      });
    default:
      return state;
  }
};

export default config;

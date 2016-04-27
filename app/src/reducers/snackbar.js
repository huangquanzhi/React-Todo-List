import {
  SET_SNACKBAR_STATE,
  SET_SNACKBAR_MESSAGE,
} from '../constants/snackbar';

const initialState = {
  show: false,
  message: '',
};

const snackbar = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR_STATE:
      return Object.assign({}, state, {
        show: action.status,
      });
    case SET_SNACKBAR_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
      });
    default:
      return state;
  }
};

export default snackbar;

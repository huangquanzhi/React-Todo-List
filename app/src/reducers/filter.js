import {
  SET_SNACKBAR_STATE
} from '../constants/filter';

const initialState = {
  snackBar: false,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR_STATE:
      return Object.assign({}, state, {
        snackBar: action.status,
      });
    default:
      return state;
  }
};

export default filter;

import {
  SET_SNACKBAR_STATE,
  SET_SNACKBAR_MESSAGE,
} from '../constants/snackbar';

export const setSnackBarMessage = (message) => {
  return { type: SET_SNACKBAR_MESSAGE, message };
};

export const openSnackBar = (status, message = null) => {
  return dispatch => {
    if (message !== null) {
      dispatch(setSnackBarMessage(message));
    }
    dispatch({ type: SET_SNACKBAR_STATE, status });
  };
};

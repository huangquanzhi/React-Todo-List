import { combineReducers } from 'redux';
import todo from './todo';
import task from './task';
import category from './category';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  category, snackbar, task, todo,
});

export default rootReducer;

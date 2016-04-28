import { combineReducers } from 'redux';
import todo from './todo';
import task from './task';
import category from './category';
import order from './order';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  category, snackbar, order, task, todo,
});

export default rootReducer;

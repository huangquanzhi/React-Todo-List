import { combineReducers } from 'redux';
import todo from './todo';
import task from './task';
import category from './category';

const rootReducer = combineReducers({
  category, task, todo,
});

export default rootReducer;

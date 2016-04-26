import { combineReducers } from 'redux';
import todo from './todo';
import task from './task';

const rootReducer = combineReducers({
  todo, task
});

export default rootReducer;

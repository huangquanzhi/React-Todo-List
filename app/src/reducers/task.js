import {
  TASK_EDIT_TEXT,
  TASK_EDIT_PRIORITY,
  TASK_EDIT_CATEGORY,
  TASK_EDIT_COLOR,
  TASK_EDIT_DATE,
} from '../constants/task';

const initialState = {
  text: '',
  priority: 0,
  category: null,
  color: '#3F51B5',
  date: new Date().getTime(),
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case TASK_EDIT_TEXT:
      return Object.assign({}, state, {
        text: action.text,
      });
    case TASK_EDIT_PRIORITY:
      return Object.assign({}, state, {
        text: action.order,
      });
    case TASK_EDIT_CATEGORY:
      return Object.assign({}, state, {
        text: action.text,
      });
    case TASK_EDIT_COLOR:
      return Object.assign({}, state, {
        text: action.text,
      });
    case TASK_EDIT_DATE:
      return Object.assign({}, state, {
        date: action.date,
      });
    default:
      return state;
  }
};

export default task;

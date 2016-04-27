import {
  SETUP_TODO,
  TODO_EDIT_TEXT,
  TODO_EDIT_PRIORITY,
  TODO_EDIT_CATEGORY,
  TODO_EDIT_COLOR,
  TODO_EDIT_DATE,
} from '../constants/todo';

export const setupTodo = () => {
  return { type: SETUP_TODO };
};

export const editText = (index, text) => {
  return { type: TODO_EDIT_TEXT, index, text };
};

export const editPriority = (index, order) => {
  return { type: TODO_EDIT_PRIORITY, index, order };
};

export const editCategory = (index, category) => {
  return { type: TODO_EDIT_CATEGORY, index, category };
};

export const editColor = (index, color) => {
  return { type: TODO_EDIT_COLOR, index, color };
};

export const editDate = (index, date) => {
  return { type: TODO_EDIT_DATE, index, date };
};


export const addNewTodo = (text, priority, category, color, date) => {
  return (dispatch, getState) => {
    const { todo } = getState();
    const index = todo.length;

    dispatch(setupTodo());
    dispatch(editText(index, text));
    dispatch(editPriority(index, priority));
    dispatch(editCategory(index, category));
    dispatch(editColor(index, color));
    dispatch(editDate(index, date));
  };
};

import {
  TASK_EDIT_TEXT,
  TASK_EDIT_PRIORITY,
  TASK_EDIT_CATEGORY,
  TASK_EDIT_COLOR,
  TASK_EDIT_DATE,
} from '../constants/task';

export const editText = (text) => {
  return { type: TASK_EDIT_TEXT, text };
};

export const editPriority = (order) => {
  return { type: TASK_EDIT_PRIORITY, order };
};

export const editCategory = (category) => {
  return { type: TASK_EDIT_CATEGORY, category };
};

export const editColor = (color) => {
  return { type: TASK_EDIT_COLOR, color };
};

export const editDate = (date) => {
  return { type: TASK_EDIT_DATE, date };
};

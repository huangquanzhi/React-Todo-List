import {
  CATEGORY_ADD_CATE,
  CATEGORY_CLEAR_TEXT,
  CATEGORY_EDIT_TEXT,
} from '../constants/category';

export const editText = (text) => {
  return { type: CATEGORY_EDIT_TEXT, text };
};

export const clearText = () => {
  return { type: CATEGORY_CLEAR_TEXT };
};

export const addCategory = (text) => {
  return { type: CATEGORY_ADD_CATE, text };
};

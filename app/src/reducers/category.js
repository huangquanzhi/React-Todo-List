import {
  CATEGORY_EDIT_TEXT,
  CATEGORY_CLEAR_TEXT,
  CATEGORY_ADD_CATE,
} from '../constants/category';

const initialState = {
  categories: ['General'],
  text: '',
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_EDIT_TEXT:
      return Object.assign({}, state, {
        text: action.text,
      })
    case CATEGORY_CLEAR_TEXT:
      return Object.assign({}, state, {
        text: '',
      })
    case CATEGORY_ADD_CATE:
      return Object.assign({}, state, {
        categories: state.categories.concat(action.text),
      })
    default:
      return state;
  }
};

export default category;

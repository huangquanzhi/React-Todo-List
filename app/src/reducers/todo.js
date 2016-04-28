import {
  SETUP_TODO,
  TODO_EDIT_TEXT,
  TODO_EDIT_PRIORITY,
  TODO_EDIT_CATEGORY,
  TODO_EDIT_COLOR,
  TODO_EDIT_DATE,
} from '../constants/todo';

const initialState = [];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case SETUP_TODO:
      const newTodo = {
        id: state.length,
        text: '',
        timeStamp: new Date().getTime(),
        priority: 0,
        category: 0,
        color: '#FFFFFF',
        isEditing: false,
        isCompleted: false,
      };

      return [...state, newTodo];
    case TODO_EDIT_TEXT:
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index],
          {
            text: action.text,
          }),
        ...state.slice(action.index + 1),
      ];
    case TODO_EDIT_PRIORITY:
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index],
          {
            priority: action.order,
          }),
        ...state.slice(action.index + 1),
      ];
    case TODO_EDIT_CATEGORY:
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index],
          {
            category: action.category,
          }),
        ...state.slice(action.index + 1),
      ];
    case TODO_EDIT_COLOR:
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index],
          {
            color: action.color,
          }),
        ...state.slice(action.index + 1),
      ];
    case TODO_EDIT_DATE:
      return [...state.slice(0, action.index),
        Object.assign({}, state[action.index],
          {
            date: action.date,
          }),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

export default todo;

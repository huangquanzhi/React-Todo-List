import {
  ORDER_BY_PRIORITY_DESC,
  ORDER_BY_PRIORITY_ASC,
  ORDER_BY_TIME_DESC,
  ORDER_BY_TIME_ASC,
  SET_ORDER_BY,
} from '../constants/order';

const initialState = {
  orderBy: ORDER_BY_TIME_DESC,
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_BY:
      return Object.assign({}, state, {
        orderBy: action.orderBy,
      });
    default:
      return state;
  }
};

export default order;

import {
  SET_ORDER_BY,
} from '../constants/order';

export const setOrderBy = (orderBy) => {
  return { type: SET_ORDER_BY, orderBy };
};

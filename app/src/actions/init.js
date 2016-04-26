import {
  INIT,
} from '../constants';

export const start = (status) => {
  return { type: INIT, status };
};
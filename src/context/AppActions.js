import { FETCH_CATS, DELETE_CAT, ADD_CAT } from './constants';

export const fetchCatsActions = dispatch => (cats) => {
  return dispatch({
    type: FETCH_CATS,
    payload: cats
  });
};

export const deleteCatAction = dispatch => id => {
  return dispatch({
    type: DELETE_CAT,
    payload: id
  });
};

export const addCatAction = dispatch => cat => {
  return dispatch({
    type: ADD_CAT,
    payload: cat
  });
};

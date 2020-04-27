import { FETCH_CATS, DELETE_CAT, ADD_CAT } from './constants';


export default (state, action) => {
  switch (action.type) {
    case FETCH_CATS:
      return {
        ...state,
        cats: action.payload
      };
    case DELETE_CAT:
      return {
        ...state,
        cats: state.cats.filter(
          cat => cat.url !== action.payload
        )
      };
    case ADD_CAT:
      return {
        ...state,
        cats: [action.payload, ...state.cats]
      };
    default:
      return state;
  }
};

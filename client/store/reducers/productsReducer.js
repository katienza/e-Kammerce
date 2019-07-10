import {FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/productsActions';

/*
 *   INITIAL STATE
 */
const initialState = {
  products: [],
  error: null,
};

/*
 *   REDUCER
 */
export default function(state = initialState, action) {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return { ...state, products: action.products };
  } else if (action.type === FETCH_PRODUCTS_ERROR) {
    return { ...state, error: action.error };
  } else {
    return state;
  }
}

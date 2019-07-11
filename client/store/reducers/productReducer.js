import {
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions/productActions';

/*
 *   INITIAL STATE
 */
const initialState = {
  product: [],
  error: null,
};

/*
 *   REDUCER
 */
export default function(state = initialState, action) {
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, product: action.product };
  } else if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, error: action.error };
  } else {
    return state;
  }
}

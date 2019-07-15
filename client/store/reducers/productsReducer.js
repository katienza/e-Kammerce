import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_LOADING,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions/productsActions';

/*
 *   INITIAL STATE
 */
const initialState = {
  loading: false,
  products: [],
  error: null,
};

/*
 *   REDUCERS
 */
export default function(state = initialState, action) {
  if (action.type === FETCH_PRODUCTS_LOADING) {
    return { ...state, loading: !state.loading };
  } else if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return { ...state, loading: !state.loading, products: action.products };
  } else if (action.type === FETCH_PRODUCTS_ERROR) {
    return { ...state, error: action.error };
  } else if (action.type === GET_SINGLE_PRODUCT_LOADING) {
    return { ...state, loading: !state.loading };
  } else if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, loading: !state.loading, products: [action.product] };
  } else if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, error: action.error };
  } else {
    return state;
  }
}
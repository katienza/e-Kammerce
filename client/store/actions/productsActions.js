/*
 *   ACTION TYPES
 */
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

/*
 *   ACTION CREATORS
 */
export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products: products,
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  error: error,
});

/*
 *   ACTION TYPES
 */
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS';
export const GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR';
export const GET_SINGLE_PRODUCT_LOADING = 'GET_SINGLE_PRODUCT_LOADING';

/*
 *   ACTION CREATORS
 */
export const getSingleProductLoading = () => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
});

export const getSingleProductSuccess = product => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  product: product,
});

export const getSingleProductError = error => ({
  type: GET_SINGLE_PRODUCT_ERROR,
  error: error,
});

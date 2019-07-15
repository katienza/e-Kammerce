/*
 *   ACTION TYPES
 */
export const FETCH_PRODUCTS_LOADING = 'FETCH_PRODUCTS_LOADING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS';
export const GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR';
export const GET_SINGLE_PRODUCT_LOADING = 'GET_SINGLE_PRODUCT_LOADING';
/*
 *   ACTION CREATORS
 */
export const fetchProductsLoading = () => ({
  type: FETCH_PRODUCTS_LOADING,
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products: products,
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  error: error,
});

export const getSingleProductLoading = () => ({
  type: GET_SINGLE_PRODUCT_LOADING,
});

export const getSingleProductSuccess = product => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  product: product,
});

export const getSingleProductError = error => ({
  type: GET_SINGLE_PRODUCT_ERROR,
  error: error,
});

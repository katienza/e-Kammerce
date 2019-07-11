import {
  fetchProductsSuccess,
  fetchProductsError,
} from '../actions/productsActions';
import axios from 'axios';

/*
 *   THUNK
 */
const getProductsAction = () => async dispatch => {
  try {
    const url = 'http://localhost:3000/api/products';
    const res = await axios.get(url);
    const limitedProducts = res.data.slice(0, 3);
    dispatch(fetchProductsSuccess(limitedProducts));
  } catch (err) {
    dispatch(fetchProductsError(err));
  }
};

export default getProductsAction;

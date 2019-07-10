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
    dispatch(fetchProductsSuccess(res.data));
  } catch (err) {
    dispatch(fetchProductsError(err));
  }
};

export default getProductsAction;

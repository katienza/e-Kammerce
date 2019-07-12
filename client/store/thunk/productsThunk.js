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
    const action = fetchProductsSuccess(res.data)
    dispatch(action);
  } catch (err) {
    const error = fetchProductsError(err)
    dispatch(error);
  }
};

export default getProductsAction;

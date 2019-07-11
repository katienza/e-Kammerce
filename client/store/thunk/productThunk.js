import {
  getSingleProductSuccess,
  getSingleProductError,
} from '../actions/productActions';
import axios from 'axios';

/*
 *   THUNK
 */
const getSingleProductAction = id => async dispatch => {
  try {
    const url = `http://localhost:3000/api/products/${id}`;
    const res = await axios.get(url);
    const action = getSingleProductSuccess(res.data)
    dispatch(action);
  } catch (err) {
    const error = getSingleProductError(err)
    dispatch(error);
  }
};

export default getSingleProductAction;

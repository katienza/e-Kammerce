import {
  getSingleProductLoading,
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
    dispatch(getSingleProductLoading())
    const res = await axios.get(url);
    const successAction = getSingleProductSuccess(res.data)
    dispatch(successAction)
  } catch (err) {
    const error = getSingleProductError(err)
    dispatch(error);
  }
};

export default getSingleProductAction;

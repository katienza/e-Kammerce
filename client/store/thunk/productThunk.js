import {
  getSingleProductLoading,
  getSingleProductSuccess,
  getSingleProductError,
} from '../actions/productsActions';
import axios from 'axios';

/*
 *   THUNK
 */
const getSingleProductAction = id => async dispatch => {
  try {
    const productUrl = `https://e-kammerce.herokuapp.com/api/products/${id}`;
    dispatch(getSingleProductLoading())
    const product = await axios.get(productUrl)
    const successAction = getSingleProductSuccess(product.data)
    dispatch(successAction)
  } catch (err) {
    const error = getSingleProductError(err)
    dispatch(error);
  }
};

export default getSingleProductAction;

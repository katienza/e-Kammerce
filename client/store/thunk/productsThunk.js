import {
  fetchProductsSuccess,
  fetchProductsError,
  fetchProductsLoading,
} from '../actions/productsActions';
import axios from 'axios';

/*
 *   THUNK
 */
const getProductsAction = () => async dispatch => {
  try {
    const url = 'https://e-kammerce.herokuapp.com/api/products';
    dispatch(fetchProductsLoading());
    const res = await axios.get(url);
    const action = fetchProductsSuccess(res.data);
    dispatch(action);
  } catch (err) {
    const error = fetchProductsError(err)
    dispatch(error);
  }
};

export default getProductsAction;

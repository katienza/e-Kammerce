import {
  fetchProductsSuccess,
  fetchProductsError,
} from '../actions/productsActions';
import axios from 'axios';

/*
 *   THUNK
 */
const sortByPrice = () => async dispatch => {
  try {
    const url = 'https://e-kammerce.herokuapp.com/api/products';
    const res = await axios.get(url);
    const sortedData = res.data.sort((item1, item2) => {
      if (item1.price < item2.price) {
        return -1;
      } else if (item1.price > item2.price) {
        return 1;
      } else {
        return 0;
      }
    });
    const action = fetchProductsSuccess(sortedData);
    dispatch(action);
  } catch (err) {
    const error = fetchProductsError(err);
    dispatch(error);
  }
};

export default sortByPrice;

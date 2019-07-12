import {
  fetchProductsSuccess,
  fetchProductsError,
} from '../actions/productsActions';
import axios from 'axios';

/*
 *   THUNK
 */
const sortByTime = () => async dispatch => {
  try {
    const url = 'http://localhost:3000/api/products';
    const res = await axios.get(url);
    const sortedData = res.data.sort((item1, item2) => {
      if (item1.created_at < item2.created_at) {
        return 1;
      } else if (item1.created_at > item2.created_at) {
        return -1;
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

export default sortByTime;

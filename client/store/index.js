import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import check from './reducers/checkReducer';
import user from './reducers/userReducer';
import productsList from './reducers/productsReducer';
import singleProduct from './reducers/productReducer';

const reducer = combineReducers({
  check,
  user,
  productsList,
  singleProduct,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

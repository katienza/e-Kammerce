import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import check from './check';
import user from './user';

const reducer = combineReducers({
  check,
  user
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import user from './user';

const reducer = combineReducers({
  user,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

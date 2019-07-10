import {ADD_USER} from '../actions/userActions';
/*
 *   INITIAL STATE
 */
const initialState = {
  username: '',
};

/*
 *   REDUCER
 */
export default function(state = initialState, action) {
  if (action.type === ADD_USER) {
    return { ...state, username: action.username };
  } else {
    return state;
  }
}

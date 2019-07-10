import { TOGGLE_LOGIN } from '../actions/checkActions';

/*
 *   INITIAL STATE
 */
const initialState = {
  auth: { isLoggedIn: false },
};

/*
 *   REDUCER
 */
export default function(state = initialState, action) {
  if (action.type === TOGGLE_LOGIN) {
    return {
      ...state,
      auth: { isLoggedIn: !state.auth.isLoggedIn },
    };
  } else {
    return state;
  }
}

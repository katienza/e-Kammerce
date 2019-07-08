/*
 *   ACTION TYPES
 */
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

/*
 *   ACTION CREATORS
 */
export const loginCheck = () => ({
  type: TOGGLE_LOGIN,
});

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
    return { ...state, auth: {isLoggedIn: !state.auth.isLoggedIn} };
  } else {
    return state;
  }
}

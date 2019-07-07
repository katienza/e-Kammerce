/*
 *   ACTION TYPES
 */
const LOG_IN = 'LOG_IN';

/*
 *   ACTION CREATORS
 */
const userLogIn = user => ({
  type: LOG_IN,
  user,
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
  if (action.type === 'LOG_IN') {
    return { ...state, auth: { isLoggedIn: true } };
  } else {
    return state;
  }
}

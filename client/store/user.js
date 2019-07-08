/*
 *   ACTION TYPES
 */
export const ADD_USER = 'ADD_USER';

/*
 *   ACTION CREATORS
 */
export const addUser = username => ({
  type: ADD_USER,
  username
});

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
    return { ...state, username: action.username }
  } else {
    return state;
  }
}

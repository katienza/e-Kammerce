/*
 *   ACTION TYPES
 */
export const ADD_USER = 'ADD_USER';

/*
 *   ACTION CREATORS
 */
export const addUser = username => ({
  type: ADD_USER,
  username: username,
});
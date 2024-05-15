// userActions.js

import * as types from "./types";

// Example async action to fetch users from an API
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: types.FETCH_USERS_REQUEST });

  try {
    // Perform API request
    const response = await fetch("tdhc.pythonanywhere.com/members");
    const data = await response.json();

    if (data && data.length) {
      dispatch({
        type: types.FETCH_USERS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: types.FETCH_USERS_FAILURE,
        payload: "No data received from the API",
      });
    }
  } catch (error) {
    dispatch({
      type: types.FETCH_USERS_FAILURE,
      payload: error.message,
    });
  }
};

// Other CRUD actions (addUser, updateUser, deleteUser) can follow a similar pattern

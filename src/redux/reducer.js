import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers as needed
});

const initialState = {
  user: null,
  // Add other initial state properties as needed
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle actions and update state accordingly
    default:
      return state;
  }
};

export default reducer;

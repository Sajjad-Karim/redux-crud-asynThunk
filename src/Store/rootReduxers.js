import { combineReducers } from "@reduxjs/toolkit";
import getuserSlice from "../Features/GetUsers/getuser.Slice";
export const rootReducer = combineReducers({
  users: getuserSlice,
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "../store/counter/countSlice";

const combinedReducer = combineReducers({
  counter,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;

import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";

const allReducers = combineReducers({
  counter: counterReducer,
});

export default allReducers;

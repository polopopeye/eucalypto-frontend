import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import jobModalReducer from "./counter/jobModalReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  jobModal: jobModalReducer,
});

export default allReducers;

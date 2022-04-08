import { combineReducers } from "redux";
import jobModalSlice from "../../slices/jobModalSlice";

const jobModalReducer = combineReducers({
  modal: jobModalSlice.reducer,
});

export default jobModalReducer;

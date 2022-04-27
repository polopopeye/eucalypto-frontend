import { combineReducers } from "redux";
import userSlice from "../slices/user/userSlice";
import jobModalReducer from "./jobModalReducer";

const allReducers = combineReducers({
  jobModal: jobModalReducer,
  user: userSlice.reducer,
});

export default allReducers;

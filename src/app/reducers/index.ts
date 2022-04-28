import { combineReducers } from "redux";
import userSlice from "../slices/user/userSlice";
import ModalsReducer from "./jobModalReducer";

const allReducers = combineReducers({
  modal: ModalsReducer,
  user: userSlice.reducer,
});

export default allReducers;

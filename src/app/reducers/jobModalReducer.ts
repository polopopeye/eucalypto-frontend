import { combineReducers } from "redux";
import emailRegisterModalSlice from "../slices/modals/emailRegisterModalSlice";
import jobModalSlice from "../slices/modals/jobModalSlice";

const ModalsReducer = combineReducers({
  jobModal: jobModalSlice.reducer,
  emailRegisterModal: emailRegisterModalSlice.reducer,
});

export default ModalsReducer;

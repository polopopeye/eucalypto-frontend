import { combineReducers } from "redux";
import categorySlice from "../slices/categories/categorySlice";
import companySlice from "../slices/companies/companySlice";
import userSlice from "../slices/user/userSlice";
import usersSlice from "../slices/user/usersSlice";
import modalsReducer from "./modalsReducer";
import jobsReducer from "./jobsReducers";

const allReducers = combineReducers({
  modals: modalsReducer,
  jobs: jobsReducer,
  user: userSlice.reducer,
  users: usersSlice.reducer,
  category: categorySlice.reducer,
  company: companySlice.reducer,
});

export default allReducers;

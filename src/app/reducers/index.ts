import { combineReducers } from "redux";
import categorySlice from "../slices/categories/categorySlice";
import companySlice from "../slices/companies/companySlice";
import userSlice from "../slices/user/userSlice";
import usersSlice from "../slices/user/usersSlice";
import ModalsReducer from "./jobModalReducer";

const allReducers = combineReducers({
  modal: ModalsReducer,
  user: userSlice.reducer,
  users: usersSlice.reducer,
  category: categorySlice.reducer,
  company: companySlice.reducer,
});

export default allReducers;

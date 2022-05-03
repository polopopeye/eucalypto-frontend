import { combineReducers } from "redux";
import allCompaniesSlice from "../slices/companies/allCompaniesSlice";
import companySlice from "../slices/companies/companySlice";

const companiesReducer = combineReducers({
  personalcompanies: companySlice.reducer,
  allCompanies: allCompaniesSlice.reducer,
});

export default companiesReducer;

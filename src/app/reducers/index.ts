import { combineReducers } from 'redux';
import categorySlice from '../slices/categories/categorySlice';
import companySlice from '../slices/companies/companySlice';
import userSlice from '../slices/user/userSlice';
import usersSlice from '../slices/user/usersSlice';
import modalsReducer from './modalsReducer';
import jobsReducer from './jobsReducers';
import companiesReducer from './companiesReducers';
import appReducers from './appReducers';

const allReducers = combineReducers({
  app: appReducers,
  modals: modalsReducer,
  jobs: jobsReducer,
  company: companiesReducer,
  user: userSlice.reducer,
  users: usersSlice.reducer,
  category: categorySlice.reducer,
});

export default allReducers;

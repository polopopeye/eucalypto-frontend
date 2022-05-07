import { combineReducers } from 'redux';
import dashboardNavHeaderSlice from '../slices/app/dashboardNavHeader';

const appReducers = combineReducers({
  dashboardNavHeader: dashboardNavHeaderSlice.reducer,
});

export default appReducers;

import { combineReducers } from 'redux';
import allJobOffersSlice from '../slices/jobs/allJobOffersSlice';
import filteredJobOffersSlice from '../slices/jobs/filterJobOffersSlice';

import personalJobOffersSlice from '../slices/jobs/personalJobOffersSlice';

const jobsReducer = combineReducers({
  personalJobOffers: personalJobOffersSlice.reducer,
  filteredJobOffers: filteredJobOffersSlice.reducer,
  allJobOffers: allJobOffersSlice.reducer,
});

export default jobsReducer;

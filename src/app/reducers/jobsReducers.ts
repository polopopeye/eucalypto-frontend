import { combineReducers } from 'redux';
import allJobOffersSlice from '../slices/jobs/allJobOffersSlice';
import filteredJobOffersSlice from '../slices/jobs/filterJobOffersSlice';

import currentJobOfferSlice from '../slices/jobs/currentJobOffersSlice';
import personalJobOffersSlice from '../slices/jobs/personalJobOffersSlice';

const jobsReducer = combineReducers({
  personalJobOffers: personalJobOffersSlice.reducer,
  filteredJobOffers: filteredJobOffersSlice.reducer,
  allJobOffers: allJobOffersSlice.reducer,
  currentJobOffer: currentJobOfferSlice.reducer,
});

export default jobsReducer;

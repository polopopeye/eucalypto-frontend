import axios from 'axios';

import { store } from 'src/app/store';
import { api } from '../apiEndPoints';
import { toast } from 'react-toastify';

import filteredJobOffersSlice from 'src/app/slices/jobs/filterJobOffersSlice';
import allJobOffersSlice from 'src/app/slices/jobs/allJobOffersSlice';
import currentJobOfferSlice from 'src/app/slices/jobs/currentJobOffersSlice';
import personalJobOffersSlice from 'src/app/slices/jobs/personalJobOffersSlice';

interface propToFindJobOffers {
  prop: string;
  value: string | number | boolean;
  reduxSpace?:
    | 'filteredJobOffers'
    | 'personalJobOffers'
    | 'allJobOffers'
    | 'currentJobOffer'
    | 'none';
}
const retrieveJobOffers = async (
  props: propToFindJobOffers,
  next?: Function
) => {
  const url = api.jobOffers + '/' + props.prop + '/' + props.value;

  axios
    .get(url)
    .then((response) => {
      const jobOffersFound = response.data;

      if (
        props.reduxSpace === 'personalJobOffers' ||
        props.reduxSpace === undefined
      ) {
        store.dispatch(personalJobOffersSlice.actions.setData(jobOffersFound));
      }
      if (props.reduxSpace === 'filteredJobOffers') {
        store.dispatch(filteredJobOffersSlice.actions.setData(jobOffersFound));
      }
      if (props.reduxSpace === 'allJobOffers') {
        store.dispatch(allJobOffersSlice.actions.setData(jobOffersFound));
      }
      if (props.reduxSpace === 'currentJobOffer') {
        store.dispatch(currentJobOfferSlice.actions.setData(jobOffersFound));
      }

      if (typeof next === 'function') {
        next(jobOffersFound);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Error retrieving Company info');
    });
};

export default retrieveJobOffers;

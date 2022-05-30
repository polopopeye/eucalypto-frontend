import axios from 'axios';

import { store } from '../../store';
import { api } from '../apiEndPoints';
import { toast } from 'react-toastify';

import allCompaniesSlice from '../../slices/companies/allCompaniesSlice';

// Retrieves all company data
const retrieveAllCompanies = async (next?: Function) => {
  const url = api.company;

  axios
    .get(url)
    .then((response) => {
      const allCompaniesFound = response.data;

      store.dispatch(allCompaniesSlice.actions.setData(allCompaniesFound));
      if (typeof next === 'function') {
        next(allCompaniesFound);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Error retrieving Company info');
    });
};

export default retrieveAllCompanies;

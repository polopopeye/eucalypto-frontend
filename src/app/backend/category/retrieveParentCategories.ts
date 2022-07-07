import axios from 'axios';

import { api } from '../apiEndPoints';
import { toast } from 'react-toastify';

const retrieveParentCategories = (next?: Function) => {
  const url = api.categories + '/parent';

  axios
    .get(url)
    .then((response) => {
      const allParentCategoriesFound = response.data;

      if (typeof next === 'function') {
        next(allParentCategoriesFound);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Error retrieving Parent Category info');
    });
};

export default retrieveParentCategories;

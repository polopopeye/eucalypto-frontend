import axios from 'axios';

import { store } from '../../store';
import { api } from '../apiEndPoints';
import { toast } from 'react-toastify';
import categorySlice from '../../slices/categories/categorySlice';

interface retrieveCategories {
  propToFind: string;
  value?: string;
  saveIn: string;
}

const retrieveCategories = (props: retrieveCategories, next?: Function) => {
  const { propToFind, value, saveIn } = props;
  const url = api.categories + '/' + propToFind + '/' + value;

  axios
    .get(url)
    .then((response) => {
      const allCategoriesFound = response.data;

      let newCategoryToAppendToRedux = [] as any;

      if (allCategoriesFound) {
        allCategoriesFound.forEach((category: any) => {
          if (
            !newCategoryToAppendToRedux.some(
              (element: any) => element.id === category.id
            )
          ) {
            newCategoryToAppendToRedux.push(category);
          }
        });
      }

      const storeCat = store.getState().category;

      const dataToAppend = {
        ...storeCat,
        [saveIn]: newCategoryToAppendToRedux,
      };

      store.dispatch(categorySlice.actions.setData(dataToAppend));

      if (typeof next === 'function') {
        next(allCategoriesFound);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Error retrieving Child category info');
    });
};

export default retrieveCategories;

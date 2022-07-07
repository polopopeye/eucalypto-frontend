import axios from 'axios';
import { toast } from 'react-toastify';
import { CategoryInterface } from 'src/commons/categoryInterface';
import { api } from '../apiEndPoints';

import retrieveCategories from './retrieveCategories';
import retrieveParentCategories from './retrieveParentCategories';

const deleteCategory = (categoryData: CategoryInterface, next?: Function) => {
  axios
    .delete(api.categories + '/' + categoryData.id)
    .then((response) => {
      toast.success('Category Deleted Successfully');

      retrieveParentCategories((allParentCats: any) => {
        allParentCats.forEach((parentCat: any) => {
          retrieveCategories(
            {
              propToFind: 'type',
              value: parentCat.name,
              saveIn: parentCat.name,
            },
            next
          );
        });
      });
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default deleteCategory;

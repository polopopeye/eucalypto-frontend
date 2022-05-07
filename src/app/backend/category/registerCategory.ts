import axios from 'axios';
import { toast } from 'react-toastify';
import { CategoryInterface } from '../../../commons/categoryInterface';
import { api } from '../apiEndPoints';

const registerCategory = (categoryData: CategoryInterface, next?: Function) => {
  axios
    .post(api.categories, categoryData)
    .then((response) => {
      toast.success('Category Created Successfully');
      if (typeof next === 'function') {
        next(response.data);
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default registerCategory;

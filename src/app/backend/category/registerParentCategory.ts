import axios from 'axios';
import { toast } from 'react-toastify';
import { ParentCategoryInterface } from 'src/commons/parentCategoryInterface';
import { api } from '../apiEndPoints';

const registerParentCategory = (
  categoryData: ParentCategoryInterface,
  next?: Function
) => {
  axios
    .post(api.categories + '/parent', categoryData)
    .then((response) => {
      toast.success('Parent Category Created Successfully');
      if (typeof next === 'function') {
        next(response.data);
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default registerParentCategory;

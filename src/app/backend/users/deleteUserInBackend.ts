import axios from 'axios';
import { toast } from 'react-toastify';

import { api } from '../apiEndPoints';
import qs from 'qs';

import { CategoryInterface } from '../../../commons/categoryInterface';

import { store } from '../../store';

const deleteUserInBackend = (userId: string, next?: Function) => {
  axios
    .delete(api.user + '/' + userId)
    .then((response) => {
      toast.success('User Deleted Successfully');
      if (next) {
        next();
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default deleteUserInBackend;

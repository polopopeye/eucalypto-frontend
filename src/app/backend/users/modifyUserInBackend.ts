import axios from 'axios';
import { toast } from 'react-toastify';
import { UserInterface } from '../../../commons/userInterface';

import { api } from '../apiEndPoints';
import retrieveUserInfo from './retrieveUserInfo';
import qs from 'qs';
import { store } from 'src/app/store';

const modifyUserInBackend = (user: UserInterface, next?: Function) => {
  const currentUserLogedIn = store.getState().user;

  axios
    .put(api.user + '/' + user.id, qs.stringify(user))
    .then((response) => {
      toast.success('User modified successfully');
      if (currentUserLogedIn.id === user.id) {
        retrieveUserInfo({
          prop: 'id',
          value: user.id as string,
        });
      }

      if (next) {
        next();
      }
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
      toast.error('Error modifying user');
    });
};
export default modifyUserInBackend;

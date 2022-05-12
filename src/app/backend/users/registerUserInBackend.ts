import axios from 'axios';
import { toast } from 'react-toastify';
import { UserInterface } from '../../../commons/userInterface';
import { api } from '../apiEndPoints';
import retrieveUserInfo from './retrieveUserInfo';

const registerUserInBackend = (user: UserInterface, next?: Function) => {
  axios
    .post(api.user, user)
    .then((response) => {
      toast.success('Welcome to the community!');

      // if (
      //   options?.retrieve === true ||
      //   options?.retrieve === undefined ||
      //   options === undefined
      // ) {
      //   retrieveUserInfo({
      //     prop: 'email',
      //     value: user.email as string,
      //   });
      // }

      if (next) {
        // HERE WE DONT HAVE THE UID OF THE USER
        next(user);
      }
    })
    .catch((error) => {
      console.log('error');
      console.log(error);

      toast.error('Error registering user');
    });
};
export default registerUserInBackend;

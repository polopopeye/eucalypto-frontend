import axios from 'axios';
import { toast } from 'react-toastify';
import { UserInterface } from '../../../commons/userInterface';
import { api } from '../apiEndPoints';

const registerUserInBackendManual = (user: UserInterface, next?: Function) => {
  axios
    .post(api.userManualCreate, user)
    .then((response) => {
      if (next) {
        // HERE WE DONT HAVE THE UID OF THE USER
        toast.success('User Created Successfully!');
        next(user);
      }
    })
    .catch((error) => {
      console.log('error');
      console.log(error);

      toast.error('Error registering user');
    });
};
export default registerUserInBackendManual;

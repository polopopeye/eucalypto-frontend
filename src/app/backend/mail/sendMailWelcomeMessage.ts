import axios from 'axios';
import { toast } from 'react-toastify';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { UserInterface } from '../../../commons/userInterface';
import { api } from '../apiEndPoints';

const sendMailWelcomeMessage = (user: UserInterface, next?: Function) => {
  axios
    .post(api.mail.welcomeMsg, user)
    .then((response) => {
      if (next) {
        next();
      }
    })
    .catch((error) => {
      console.log('error');
      console.log(error);

      toast.error('Error Sending Mail');
    });
};
export default sendMailWelcomeMessage;

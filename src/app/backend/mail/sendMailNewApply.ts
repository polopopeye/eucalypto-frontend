import axios from 'axios';
import { toast } from 'react-toastify';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { UserInterface } from '../../../commons/userInterface';
import { api } from '../apiEndPoints';

const sendMailNewApply = (
  body: {
    user: UserInterface;
    jobOffer: JobOfferInterface;
  },
  next?: Function
) => {
  axios
    .post(api.mail.appliedOk, body)
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
export default sendMailNewApply;

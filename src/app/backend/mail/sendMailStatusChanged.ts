import axios from 'axios';
import { toast } from 'react-toastify';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { UserInterface } from '../../../commons/userInterface';
import { api } from '../apiEndPoints';

const sendMailStatusChanged = (
  body: {
    user: UserInterface;
    jobOffer: JobOfferInterface;
    statusDescription: string;
  },
  next?: Function
) => {
  axios
    .post(api.mail.statusChanged, body)
    .then((response) => {
      toast.success('Notification Sent!');
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
export default sendMailStatusChanged;

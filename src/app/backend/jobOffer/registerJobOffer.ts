import axios from 'axios';
import { toast } from 'react-toastify';
import { store } from 'src/app/store';
import { JobOfferInterface } from '../../../commons/jobOfferInterface';
import { api } from '../apiEndPoints';
import retrieveJobOffers from './retrievesJobOffer';

const registerJobOffer = (offerData: JobOfferInterface, next?: Function) => {
  axios
    .post(api.jobOffers, offerData)
    .then((response) => {
      if (store.getState().user.role === 'admin') {
        retrieveJobOffers({
          propOrId: 'published',
          value: true,
          reduxSpace: 'personalJobOffers',
        });
      } else {
        retrieveJobOffers({
          propOrId: 'applicants',
          value: store.getState().user.id as string,
          reduxSpace: 'personalJobOffers',
        });
      }

      toast.success('Job Offer Created Successfully');
      if (typeof next === 'function') {
        next(response);
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default registerJobOffer;

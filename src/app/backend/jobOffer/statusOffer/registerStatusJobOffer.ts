import axios from 'axios';
import { toast } from 'react-toastify';
// import { store } from 'src/app/store';
import { StatusJobOfferInterface } from 'src/commons/statusJobOfferInterface';

import { api } from '../../apiEndPoints';

const registerStatusJobOffer = (
  offerData: StatusJobOfferInterface,
  next?: Function
) => {
  axios
    .post(api.statusJobOffers, offerData)
    .then((response) => {
      console.log(
        '🚀 ~ file: registerStatusJobOffer.ts ~ line 15 ~ .then ~ response',
        response.data
      );
      // if (store.getState().user.role === 'admin') {
      //   retrieveJobOffers({
      //     propOrId: 'published',
      //     value: true,
      //     reduxSpace: 'personalJobOffers',
      //   });
      // } else {
      //   retrieveJobOffers({
      //     propOrId: 'applicants',
      //     value: store.getState().user.id as string,
      //     reduxSpace: 'personalJobOffers',
      //   });
      // }

      if (typeof next === 'function') {
        next(response);
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default registerStatusJobOffer;

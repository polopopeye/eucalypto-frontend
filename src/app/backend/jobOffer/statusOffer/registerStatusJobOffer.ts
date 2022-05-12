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
      if (typeof next === 'function') {
        next(response.data);
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default registerStatusJobOffer;

import axios from 'axios';
import { toast } from 'react-toastify';

import { api } from '../../apiEndPoints';
import qs from 'qs';

import retrieveJobOffers from '../retrievesJobOffer';
import { store } from '../../../store';
import { StatusJobOfferInterface } from 'src/commons/statusJobOfferInterface';

const modifyStatusJobOffer = (
  statusJobOfferData: StatusJobOfferInterface,
  next?: Function
) => {
  axios
    .put(
      api.statusJobOffers + '/' + statusJobOfferData.id,
      qs.stringify(statusJobOfferData)
    )
    .then((response) => {
      toast.success('Status JobOffer Updated Successfully');
      if (next) {
        next();
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default modifyStatusJobOffer;

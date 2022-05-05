import axios from 'axios';

import { toast } from 'react-toastify';

import { api } from '../../apiEndPoints';

interface propToFindJobOffers {
  userId: string;
  jobId: string;
}
const retrieveStatusJobOffer = async (
  props: propToFindJobOffers,
  next?: Function
) => {
  const { userId, jobId } = props;

  const url = api.statusJobOffers + '/' + userId + '/' + jobId;

  axios
    .get(url)
    .then((response) => {
      const statusJobOffersFound = response.data;
      console.log(
        '🚀 ~ file: retrieveStatusJobOffer.ts ~ line 23 ~ .then ~ statusJobOffersFound',
        statusJobOffersFound
      );

      if (typeof next === 'function') {
        next(statusJobOffersFound);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Error retrieving Company info');
    });
};

export default retrieveStatusJobOffer;

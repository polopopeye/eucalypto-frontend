import axios from 'axios';
import { toast } from 'react-toastify';
import { api } from '../../apiEndPoints';

interface DeleteStatusJobOfferProps {
  userId: string;
  jobId: string;
}

const deleteStatusJobOffer = (
  props: DeleteStatusJobOfferProps,
  next?: Function
) => {
  const { userId, jobId } = props;
  axios
    .delete(api.statusJobOffers + '/' + userId + '/' + jobId)
    .then((response) => {
      console.log(
        '🚀 ~ file: deleteJobOffer.ts ~ line 21 ~ .then ~ response',
        response
      );
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default deleteStatusJobOffer;

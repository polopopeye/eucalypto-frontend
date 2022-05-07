import axios from 'axios';
import { toast } from 'react-toastify';
import { api } from '../../apiEndPoints';

interface DeleteStatusJobOfferProps {
  userId: string;
  jobId?: string;
}

const deleteStatusJobOffer = (
  props: DeleteStatusJobOfferProps,
  next?: Function
) => {
  const { userId, jobId } = props;

  // API Url => if jobID, delete by user and object id else delete by statusId check endpoints doc
  const url = jobId
    ? api.statusJobOffers + '/' + userId + '/' + jobId
    : api.statusJobOffers + '/' + userId;

  axios
    .delete(url)
    .then((response) => {
      toast.success('Status JobOffer Deleted Successfully');
      if (next) {
        next();
      }
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export default deleteStatusJobOffer;

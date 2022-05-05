import axios from 'axios';
import userSlice from '../../slices/user/userSlice';
import { store } from '../../store';
import { api } from '../apiEndPoints';
import { toast } from 'react-toastify';
import { UserInterface } from 'src/commons/userInterface';
import retrieveJobOffers from '../jobOffer/retrievesJobOffer';

interface retrieveUserInfoInterface {
  prop: string;
  value: string;
}

const retrieveUserInfo = (
  props: retrieveUserInfoInterface,
  next?: Function
) => {
  const url = api.user + '/' + props.prop + '/' + props.value;

  axios
    .get(url)
    .then((response) => {
      const user = response.data[0];
      store.dispatch(userSlice.actions.setData(response.data[0]));

      // TODO: Is not necesary to retrieve job offers? maybe is better just only get the applicants job
      if (user.role === 'admin') {
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

      if (typeof next === 'function') {
        next();
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Error retrieving user info');
    });
};

export default retrieveUserInfo;

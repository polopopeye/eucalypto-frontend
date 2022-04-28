import axios from "axios";
import userSlice from "../slices/user/userSlice";
import { store } from "../store";
import { api } from "./apiEndPoints";
import { toast } from "react-toastify";

const retrieveUserInfo = (email: string) => {
  const url = api.user + "/email/" + email;

  if (store.getState().user?.email === email) {
    return;
  }

  if (email) {
    axios
      .get(url)
      .then((response) => {
        store.dispatch(userSlice.actions.setData(response.data[0]));
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error retrieving user info");
      });
  }
};

export default retrieveUserInfo;

import axios from "axios";
import userSlice from "../slices/user/userSlice";
import { store } from "../store";
import { api } from "./apiEndPoints";
import { toast } from "react-toastify";
import { UserInterface } from "../../commons/userInterface";

const retrieveUserInfo = (email: UserInterface["email"], next?: Function) => {
  const url = api.user + "/email/" + email;

  if (email) {
    axios
      .get(url)
      .then((response) => {
        store.dispatch(userSlice.actions.setData(response.data[0]));
        if (typeof next === "function") {
          next();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error retrieving user info");
      });
  }
};

export default retrieveUserInfo;

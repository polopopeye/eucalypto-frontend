import axios from "axios";
import { toast } from "react-toastify";
import { UserInterface } from "../../commons/userInterface";
import userSlice from "../slices/user/userSlice";
import { store } from "../store";
import { api } from "./apiEndPoints";
import retrieveUserInfo from "./retrieveUserInfo";
import qs from "qs";

const modifyUserInBackend = (user: UserInterface) => {
  const params = new URLSearchParams();

  axios
    .put(api.user + "/" + user.id, qs.stringify(user))
    .then((response) => {
      toast.success("User modified");
      retrieveUserInfo(user.email);
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
      toast.error("Error modifying user");
    });
};
export default modifyUserInBackend;

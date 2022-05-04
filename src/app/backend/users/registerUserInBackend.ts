import axios from "axios";
import { toast } from "react-toastify";
import { UserInterface } from "../../../commons/userInterface";
import { api } from "../apiEndPoints";

const registerUserInBackend = (user: UserInterface) => {
  axios
    .post(api.user, user)
    .then((response) => {
      toast.success("Welcome to the community!");
    })
    .catch((error) => {
      console.log("error");
      console.log(error);

      toast.error("Error registering user");
    });
};
export default registerUserInBackend;

import axios from "axios";
import { toast } from "react-toastify";
import { api } from "./apiEndPoints";

interface User {
  completeName: string | null;
  displayName: string | null;
  languages: Array<string>;
  role: string;
  coverImg: string;
  email: string | null;
  published: boolean;
}

const registerUserInBackend = (user: User) => {
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

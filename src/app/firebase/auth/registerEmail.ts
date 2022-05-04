import axios from "axios";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { errors } from "../constants";
import { toast } from "react-toastify";
import registerUserInBackend from "../../backend/users/registerUserInBackend";

const registerEmail = (email: string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      registerUserInBackend({
        completeName: email,
        displayName: email,
        languages: ["english"],
        role: "talent",
        coverImg: "https://picsum.photos/seed/" + email + "/200/200",
        email: email,
        published: true,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = errors[errorCode];
      toast.error(errorMessage);
      return errorMessage;
    });
};

export default registerEmail;

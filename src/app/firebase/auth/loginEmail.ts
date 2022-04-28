import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { errors } from "../constants";

const loginEmail = async (email: string, password: string) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toast.success("Successfully Logged In");
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = errors[errorCode];
      toast.error(errorMessage);
      return errorMessage;
    });
};

export default loginEmail;

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import registerUserInBackend from "../../backend/registerUserInBackend";
import { toast } from "react-toastify";
import { errors } from "../constants";

const registerGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const { email, displayName, photoURL } = user;
      registerUserInBackend({
        completeName: displayName || email,
        displayName: displayName || email,
        languages: ["english"],
        role: "talent",
        coverImg:
          photoURL || "https://picsum.photos/seed/" + email + "/200/200",
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

export default registerGoogle;

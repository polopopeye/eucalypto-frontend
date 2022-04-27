import { getAuth, signOut } from "firebase/auth";

const logOut = () => {
  const auth = getAuth();

  signOut(auth)
    .then((response) => {
      console.log(
        "🚀 ~ file: logOut copy.ts ~ line 9 ~ .then ~ response",
        response
      );
    })
    .catch((error) => {
      console.log("🚀 ~ file: logOut.ts ~ line 12 ~ error", error);
    });
};

export default logOut;

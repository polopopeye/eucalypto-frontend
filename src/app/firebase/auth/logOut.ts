import { getAuth, signOut } from "firebase/auth";
import userSlice from "../../slices/user/userSlice";
import { store } from "../../store";
import { toast } from "react-toastify";

const logOut = (next?: Function) => {
  const auth = getAuth();

  signOut(auth)
    .then((response) => {
      store.dispatch(userSlice.actions.emptyData());
      toast.success("Bye, see you soon!");
      if (next) {
        next();
      }
    })
    .catch((error) => {
      console.log("🚀 ~ file: logOut.ts ~ line 12 ~ error", error);
      toast.error("Error logging out");
    });
};

export default logOut;

import { getAuth, signOut } from "firebase/auth";
import userSlice from "../../slices/user/userSlice";
import { store } from "../../store";
import { toast } from "react-toastify";
import { Router, useRouter } from "next/router";

const logOut = () => {
  const auth = getAuth();

  signOut(auth)
    .then((response) => {
      store.dispatch(
        userSlice.actions.setData({
          email: undefined,
          coverImg: undefined,
          displayName: undefined,
        })
      );
      toast.success("Bye, see you soon!");
    })
    .catch((error) => {
      console.log("🚀 ~ file: logOut.ts ~ line 12 ~ error", error);
      toast.error("Error logging out");
    });
};

export default logOut;

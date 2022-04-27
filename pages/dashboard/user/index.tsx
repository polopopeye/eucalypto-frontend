import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import userSlice from "../../../src/app/slices/user/userSlice";
import { store } from "../../../src/app/store";
import UserProfile from "../../../src/components/Dashboard/UserProfile/UserProfile";

const Index = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      const { uid, email, providerData } = user;
      setIsLogedIn(true);
      store.dispatch(userSlice.actions.setData({ uid, email, providerData }));
    } else {
      setIsLogedIn(false);
    }
  });

  return (
    <>
      <div>
        {isLogedIn ? (
          <UserProfile />
        ) : (
          <div className="pt-32 text-center">Please Login</div>
        )}
      </div>
    </>
  );
};

export default Index;

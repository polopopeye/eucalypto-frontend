import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import retrieveUserInfo from "../../../src/app/backend/retrieveUserInfo";
import userSlice from "../../../src/app/slices/user/userSlice";
import { store } from "../../../src/app/store";
import UserProfile from "../../../src/components/Dashboard/UserProfile/UserProfile";

const Index = () => {
  const [isLogedIn, setIsLogedIn] = useState(
    store.getState().user.email ? true : false
  );
  const router = useRouter();

  store.subscribe(() => {
    if (store.getState().user.email) {
      console.log(
        "🚀 ~ file: index.tsx ~ line 17 ~ store.subscribe ~ store.getState().user.email",
        store.getState().user.email
      );
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
      router.push("/signin");
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

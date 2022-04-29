import React, { useEffect, useState } from "react";

import { store } from "../../../src/app/store";
import UserProfile from "../../../src/components/Dashboard/user/UserProfile";

const thereIsUserLogedIn = () => {
  const userEmail = store.getState().user.email;
  if (userEmail) {
    return true;
  } else {
    return false;
  }
};

const Index = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    if (thereIsUserLogedIn()) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
      window.location.href = "/signin";
    }
  }, []);

  store.subscribe(() => {
    if (thereIsUserLogedIn()) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
      window.location.href = "/signin";
    }
  });

  return (
    <>
      <div>
        {isLogedIn ? (
          <UserProfile />
        ) : (
          <div className="pt-32 text-center">Loading please wait...</div>
        )}
      </div>
    </>
  );
};

export default Index;

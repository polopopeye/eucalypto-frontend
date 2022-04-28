import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import retrieveUserInfo from "../../src/app/backend/retrieveUserInfo";
import LoginRegister from "../../src/components/LoginRegister/LoginRegister";

const Index = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const router = useRouter();

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      console.log("🚀 ~ file: index.tsx ~ line 13 ~ getAuth ~ user", user);
      retrieveUserInfo(user.email);
      setIsLogedIn(true);
      router.push("/dashboard/user");
    } else {
      setIsLogedIn(false);
    }
  });

  return (
    <div className=" align-middle self-center content-center items-center  h-full w-full">
      {!isLogedIn && <LoginRegister />}
    </div>
  );
};

export default Index;

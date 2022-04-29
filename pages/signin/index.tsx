import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import retrieveUserInfo from "../../src/app/backend/retrieveUserInfo";
import LoginRegister from "../../src/components/LoginRegister/LoginRegister";

const Index = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      setIsLogedIn(true);
      setEmail(user.email as string);
    } else {
      setIsLogedIn(false);
    }
  });

  useEffect(() => {
    if (isLogedIn) {
      retrieveUserInfo(email, () => {
        router.push("/dashboard/user");
      });
    }
  }, [isLogedIn]);

  return (
    <div className=" align-middle self-center content-center items-center  h-full w-full">
      {!isLogedIn && <LoginRegister />}
    </div>
  );
};

export default Index;

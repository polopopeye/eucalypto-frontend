import { getAuth, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import iniApp from "../../src/app/db";
import LoginRegister from "../../src/components/LoginRegister/LoginRegister";

const index = () => {
  return (
    <div className=" align-middle self-center content-center items-center  h-full w-full">
      <LoginRegister />
    </div>
  );
};

export default index;

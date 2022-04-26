import { getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import iniApp from "..";
import React from "react";

const googleAccount = (props: any) => {
  console.log(props);
  // return props;
  // console.log(process.env.API_KEY);

  // return process.env.API_KEY;
};
export async function getStaticProps() {
  // let dbResponse: any;
  // dbResponse = process.env.API_KEY;

  return {
    props: {
      dbResponse: "test",
    },
  };
}

export default googleAccount;

import credential from "./firebase.json";

import firebase from "firebase/app";
export const iniDB = () => {
  firebase.initializeApp(credential);
};
export default iniDB;

export const db = () => {
  //   return firebase.firestore();
  return "not configured yet";
};

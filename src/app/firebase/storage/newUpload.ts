import React from "react";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { toast } from "react-toastify";

export const newUpload = async (
  data_url: string,
  fileName: string,
  folderName: string,
  callback?: Function
) => {
  const storage = getStorage();
  const storageRef = ref(storage, folderName + "/" + fileName);

  await uploadString(storageRef, data_url, "data_url").then((snapshot) => {
    snapshot.ref;
    console.log("Uploaded a base64 string!");
    getDownloadURL(snapshot.ref)
      .then((url) => {
        toast.success("Uploaded correctly");
        if (typeof callback === "function") {
          callback(url);
        }
      })
      .catch((error) => {
        toast.error("Error uploading file");
      });
  });
};

export default newUpload;

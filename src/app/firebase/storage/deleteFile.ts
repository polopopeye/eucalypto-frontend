import React from 'react';
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { toast } from 'react-toastify';

export const deleteFile = async (
  fileName: string,
  folderName: string,
  callback?: Function
) => {
  const storage = getStorage();
  const storageRef = ref(storage, folderName + '/' + fileName);

  deleteObject(storageRef)
    .then(() => {
      toast.success('Deleted correctly');
      if (typeof callback === 'function') {
        callback();
      }
    })
    .catch((error) => {
      toast.error('Error Deleting file');
    });
};

export default deleteFile;

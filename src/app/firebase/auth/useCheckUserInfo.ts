import { getAuth } from 'firebase/auth';

import React, { useEffect, useState } from 'react';

import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';
import { store } from 'src/app/store';

const useCheckUserInfo = () => {
  const [loading, setLoading] = useState(true);
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    if (store.getState().user.email) {
      //User Data previously saved in the store
      setIsLogedIn(true);
      setLoading(false);
    } else {
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          setIsLogedIn(true);
          retrieveUserInfo(user.email as string, () => {
            setLoading(false);
          });
        } else {
          setLoading(false);
        }
      });
    }
  }, []);
  return { loading, isLogedIn };
};

export default useCheckUserInfo;

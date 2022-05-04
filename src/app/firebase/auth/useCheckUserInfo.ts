import { getAuth } from 'firebase/auth';

import React, { useEffect, useState } from 'react';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';

const useCheckUserInfo = () => {
  const [loading, setLoading] = useState(true);
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    setLoading(true);
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
  }, []);
  return { loading, isLogedIn };
};

export default useCheckUserInfo;

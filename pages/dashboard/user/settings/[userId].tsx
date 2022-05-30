import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import retrieveAllUsersInfo from 'src/app/backend/users/retrieveAllUsersInfo';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { UserInterface } from 'src/commons/userInterface';
import UserSettings from 'src/components/Dashboard/user/UserSettings';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const Settings = () => {
  const router = useRouter();
  const { userId } = router.query;
  const checkUserInfo = useCheckUserInfo();
  const [user, setUser] = useState(undefined as unknown as UserInterface);

  useEffect(() => {
    retrieveUserInfo(
      {
        prop: 'id',
        value: userId as string,
        reduxSpace: 'none',
      },
      (userData: UserInterface) => {
        setUser(userData);
      }
    );
  }, [userId]);

  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  retrieveCategories({
    propToFind: 'type',
    value: 'tech',
    saveIn: 'tech',
  });

  if (!user) return <LoadingComponent />;

  return <div className="pt-32">{user && <UserSettings user={user} />}</div>;
};

export default Settings;

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import retrieveAllUsersInfo from 'src/app/backend/users/retrieveAllUsersInfo';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { UserInterface } from 'src/commons/userInterface';
import UserInfo from 'src/components/Dashboard/user/UserInfo';

import UserSettings from 'src/components/Dashboard/user/UserSettings';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const UserInfoPage = () => {
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
  }, [userId, checkUserInfo.isLogedIn]);

  if (checkUserInfo.loading || !user) return <LoadingComponent />;

  if (!checkUserInfo.isLogedIn) router.push('/signin');

  retrieveParentCategories((allParentCats: any) => {
    allParentCats.forEach((parentCat: any) => {
      retrieveCategories({
        propToFind: 'type',
        value: parentCat.name,
        saveIn: parentCat.name,
      });
    });
  });
  return <div className="pt-32">{user && <UserInfo user={user} />}</div>;
};

export default UserInfoPage;

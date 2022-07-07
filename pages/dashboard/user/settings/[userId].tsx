import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';

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
  retrieveParentCategories((allParentCats: any) => {
    allParentCats.forEach((parentCat: any) => {
      retrieveCategories({
        propToFind: 'type',
        value: parentCat.name,
        saveIn: parentCat.name,
      });
    });
  });

  if (!user) return <LoadingComponent />;

  return <div className="pt-32">{user && <UserSettings user={user} />}</div>;
};

export default Settings;

import { useRouter } from 'next/router';
import React from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';

import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import { store } from '../../../../src/app/store';
import UserSettings from '../../../../src/components/Dashboard/user/UserSettings';

const Settings = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();

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

  return (
    <div className="p-32">
      <UserSettings user={store.getState().user} />
    </div>
  );
};

export default Settings;

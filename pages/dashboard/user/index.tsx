import React from 'react';
import { useRouter } from 'next/router';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

import UserProfile from '../../../src/components/Dashboard/user/UserProfile';
import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';

const Index = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();

  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  retrieveCompanyByOwner();
  retrieveCategories({
    propToFind: 'type',
    value: 'tech',
    saveIn: 'tech',
  });
  return (
    <>
      <UserProfile />
    </>
  );
};

export default Index;

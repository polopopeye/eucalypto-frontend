import React from 'react';
import { useRouter } from 'next/router';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

import UserProfile from '../../../src/components/Dashboard/user/UserProfile';
import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveAllUsersInfo from 'src/app/backend/users/retrieveAllUsersInfo';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import { store } from 'src/app/store';

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
  retrieveAllUsersInfo();
  if (store.getState().user.role === 'admin') {
    retrieveJobOffers({
      prop: 'published',
      value: true,
      reduxSpace: 'personalJobOffers',
    });
  } else {
    retrieveJobOffers({
      prop: 'applicants',
      value: store.getState().user.id as string,
      reduxSpace: 'personalJobOffers',
    });
  }

  return (
    <>
      <UserProfile />
    </>
  );
};

export default Index;

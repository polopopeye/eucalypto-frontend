import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import retrieveAllUsersInfo from 'src/app/backend/users/retrieveAllUsersInfo';
import retrieveUserInfo from 'src/app/backend/users/retrieveUserInfo';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import { UserInterface } from 'src/commons/userInterface';
import CreateNewUser from 'src/components/Dashboard/user/CreateNewUser';
import UserSettings from 'src/components/Dashboard/user/UserSettings';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const CreateUserPage = () => {
  const router = useRouter();

  const checkUserInfo = useCheckUserInfo();

  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  if (store.getState().user.role !== 'admin') router.push('/signin');

  retrieveCategories({
    propToFind: 'type',
    value: 'tech',
    saveIn: 'tech',
  });
  console.log('retrieved');

  return (
    <div className="pt-32">
      <CreateNewUser />
    </div>
  );
};

export default CreateUserPage;

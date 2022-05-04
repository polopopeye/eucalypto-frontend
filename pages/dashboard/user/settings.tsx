import { useRouter } from 'next/router';
import React, { useState } from 'react';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import { store } from '../../../src/app/store';
import UserSettings from '../../../src/components/Dashboard/user/UserSettings';

const Settings = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();

  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="pt-32">
      <UserSettings />
    </div>
  );
};

export default Settings;

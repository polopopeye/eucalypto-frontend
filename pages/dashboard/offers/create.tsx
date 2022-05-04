import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import { store } from '../../../src/app/store';
import CreateNewJobOffer from '../../../src/components/Dashboard/jobOffers/CreateNewJobOffer';

const CreateNewJobOfferPage = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="pt-32">
      <CreateNewJobOffer />
    </div>
  );
};

export default CreateNewJobOfferPage;

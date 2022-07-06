import { useRouter } from 'next/router';
import React, { useState } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import { store } from '../../../src/app/store';
import CreateNewJobOffer from '../../../src/components/Dashboard/jobOffers/CreateNewJobOffer';

const CreateNewJobOfferPage = () => {
  const router = useRouter();
  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  retrieveCategories({
    propToFind: 'type',
    value: 'tech',
    saveIn: 'tech',
  });
  retrieveCompanyByOwner(store.getState().user.id as string);

  return (
    <div className="p-32">
      <CreateNewJobOffer />
    </div>
  );
};

export default CreateNewJobOfferPage;

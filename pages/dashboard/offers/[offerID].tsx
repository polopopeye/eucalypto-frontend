import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import ModifyJobOffer from 'src/components/Dashboard/jobOffers/modifyJobOffer';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import { store } from '../../../src/app/store';

import { JobOfferInterface } from '../../../src/commons/jobOfferInterface';

const ModifyJobOfferPage = () => {
  const router = useRouter();
  const { offerID } = router.query;

  useEffect(() => {
    retrieveJobOffers({
      propOrId: 'id',
      value: offerID as string,
      reduxSpace: 'currentJobOffer',
    });
  }, [offerID]);

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="pt-32">
      <ModifyJobOffer />
    </div>
  );
};

export default ModifyJobOfferPage;

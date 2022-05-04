import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import ModifyJobOffer from 'src/components/Dashboard/jobOffers/modifyJobOffer';
import LoadingComponent from 'src/components/Utils/LoadingComponent';
import { store } from '../../../src/app/store';

import { JobOfferInterface } from '../../../src/commons/jobOfferInterface';

const ModifyJobOfferPage = () => {
  const router = useRouter();
  const { offerID } = router.query;

  const [jobOffer] = useState(
    store
      .getState()
      .jobs.personalJobOffers.find((x: JobOfferInterface) => x.id === offerID)
  );

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');

  return (
    <div className="pt-32">
      {jobOffer && <ModifyJobOffer jobOffer={jobOffer} />}
    </div>
  );
};

export default ModifyJobOfferPage;

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';

import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import retrieveAllUsersInfo from 'src/app/backend/users/retrieveAllUsersInfo';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';

import ListApplicants from 'src/components/Dashboard/jobOffers/listApplicants';

import LoadingComponent from 'src/components/Utils/LoadingComponent';

const ModifyJobOfferPage = () => {
  const router = useRouter();
  const { offerID } = router.query;

  useEffect(() => {
    if (offerID) {
      retrieveJobOffers({
        propOrId: 'id',
        value: offerID as string,
        reduxSpace: 'currentJobOffer',
      });
      retrieveAllUsersInfo();
      retrieveCategories({
        propToFind: 'type',
        value: 'tech',
        saveIn: 'tech',
      });
    }
  }, [offerID]);

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  retrieveCompanyByOwner();

  return (
    <div className="pt-32">
      <ListApplicants />
    </div>
  );
};

export default ModifyJobOfferPage;

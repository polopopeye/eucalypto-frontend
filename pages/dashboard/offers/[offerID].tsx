import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';
import { store } from 'src/app/store';
import ModifyJobOffer from 'src/components/Dashboard/jobOffers/modifyJobOffer';
import LoadingComponent from 'src/components/Utils/LoadingComponent';

const ModifyJobOfferPage = () => {
  const router = useRouter();
  const { offerID } = router.query;

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  retrieveJobOffers({
    propOrId: 'id',
    value: offerID as string,
    reduxSpace: 'currentJobOffer',
  });
  retrieveCategories({
    propToFind: 'type',
    value: 'tech',
    saveIn: 'tech',
  });
  // TODO: This is not necesary to filter for an admin
  retrieveCompanyByOwner(store.getState().user.id as string);

  return (
    <div className="pt-32">
      <ModifyJobOffer />
    </div>
  );
};

export default ModifyJobOfferPage;
